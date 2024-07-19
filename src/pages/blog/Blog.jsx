import React, { useEffect, useState } from 'react'
import "./style.css"
import { useParams } from 'react-router-dom'
import { makeApiRequest } from '../../utils/apiRequest'
import { useSelector } from 'react-redux'

const Blog = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams();
    const [blog, setBlog] = useState()

    const token = useSelector((state) => state.user.currentUser.token)


    useEffect(() => {
        const getTheSingleBlog = async () => {
            const api = makeApiRequest(token)
            setLoading(true)
            try {
                const response = await api.get(`${process.env.REACT_APP_URI}api/v1/blogs/${id}`)
                setBlog(response.data)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                console.log(err)
            }
        }
        getTheSingleBlog()
    }, [id, token])
    return (
        <div className='blog-wrapper'>
            {
                loading ?
                    <div> Loading... </div>
                    :
                    <div className='single-blog'>
                        <b>{blog?.title}</b>
                        <p>{blog?.desc}</p>
                    </div>
            }
        </div>
    )
}

export default Blog

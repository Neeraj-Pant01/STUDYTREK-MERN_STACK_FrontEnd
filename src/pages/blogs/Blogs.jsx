import React, { useEffect, useState } from 'react'
import { makeApiRequest } from '../../utils/apiRequest'
import { useSelector } from 'react-redux'
import "./blogs.css"
import { useNavigate } from 'react-router-dom'

const Blogs = () => {
  const [loading, setLoading] = useState(false)
  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()

  const token = useSelector((state) => state.user?.currentUser?.token)

  useEffect(()=>{
    const getAllBlogs = async() =>{
      setLoading(true)
      const api = makeApiRequest(token)
      try{
        const response = await api.get(`api/v1/blogs/`)
        setBlogs(response.data)
        setLoading(false)
        console.log(response)
      }catch(err){
        setLoading(false)
        console.log(err)
      }
    }
    getAllBlogs();
  },[token])
  return (
    <div className='blogs'>
      <div className="blog">
       {!loading && <h2 style={{textAlign:"center"}} className="blog-title">READ BLOGS</h2> }
        {
          loading ?
          <div className='blog-loading'> 
          Loading...
          </div>
          :
          blogs.length >0 ?
          blogs.map((b,i)=>{
            return (
              <div className='blog-t'>
                <b>{b?.title}</b>
                <div>
                <p>{b?.desc.substring(0, 20)}...</p>
                <button onClick={()=>navigate(`/blog/${b?._id}`)}>read more...</button>
                  </div>
              </div>
            )
          })
          :
          <div>No blogs to show</div>
        }
      </div>
    </div>
  )
}

export default Blogs

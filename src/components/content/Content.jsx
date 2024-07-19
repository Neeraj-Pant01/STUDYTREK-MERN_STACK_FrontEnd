import { useEffect, useState } from "react"
import Course from "../course/Course"
import "./content.css"
import { makeApiRequest } from "../../utils/apiRequest"
import { useSelector } from "react-redux"

const Content = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)
    const token = useSelector((state)=>state.user?.currentUser?.token)

    useEffect(() => {
        const api = makeApiRequest();
        setLoading(true)
        const getRandomCourses = async () => {
            try {
                const response = await api.get(`/api/v1/courses?show=${true}`)
                setCourses(response.data)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(false)
            }
        }
        getRandomCourses()
    }, [token])

    return (
        <div className='content'>
            <div className="content-wrapper">
                <h2>
                    Creating Inclusive and Holistic Learning Programs for Students of All Abilities
                </h2>
                <p>Embrace Lifelong Learning with India's Finest Teachers,
                    Engaging Video Lessons and Personalized Learning Journeys</p>
            </div>
            <div className="avail-courses">
                {
                    loading ?
                        <div className=""> Loading courses please wait ... </div>
                        :
                        courses.map((c, i) => <Course key={i} c={c} />)
                }
            </div>
        </div>
    )
}

export default Content

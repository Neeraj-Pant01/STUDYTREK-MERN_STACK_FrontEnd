import { useEffect, useState } from "react"
import Course from "../course/Course"
import "./content.css"
import { makeApiRequest } from "../../utils/apiRequest"

const Content = () => {
    const [courses, setCourses] = useState([])
    const api = makeApiRequest();

    useEffect(()=>{
        const getRandomCourses = async () =>{
            try{
                const response = await api.get(`/api/v1/courses?show=${true}`)
                setCourses(response.data)
            }catch(err){
                console.log(err)
            }
        }
        getRandomCourses()
    },[])

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
                    courses.map((c,i)=><Course key={i} c={c} />)
                }
            </div>
        </div>
    )
}

export default Content

import "./courses.css"
import Course from '../course/Course'
import { useEffect, useState } from "react"
import { makeApiRequest } from "../../utils/apiRequest"

const Courses = () => {
  const [err, setErr] = useState(false)
  const [courses, setCourses] = useState([])
  
  const api = makeApiRequest()

  useEffect(()=>{
    const getAllCourses = async () =>{
      try{
        const response = await api.get(`/api/v1/courses/all`)
        setCourses(response.data)
      }catch(err){
        setErr(true)
        console.log(err)
      }
    }
    getAllCourses()
  },[api])

  return (
    <>
    <h1 className="courses-title">AVAILABLE COURSES</h1>
    {err ?
    <div className="err-cont">
    <span className="err-icon">!</span>
    Something went wrong !
    </div>
    :
    <div className='Courses'>
      {
        courses.map((c,i)=>{
          return (
            <Course c={c} key={i}/>
          )
        })
      }
    </div>
}
    </>
  )
}

export default Courses

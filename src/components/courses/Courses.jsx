import "./courses.css"
import Course from '../course/Course'
import { useEffect, useState } from "react"
import { makeApiRequest } from "../../utils/apiRequest"
import { useSelector } from "react-redux"

const Courses = () => {
  const [err, setErr] = useState(false)
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)

  const token = useSelector((state)=>state.user.currentUser.token)
  
  useEffect(()=>{
    const getAllCourses = async () =>{
  const api = makeApiRequest(token)
  setLoading(true)
      try{
        const response = await api.get(`/api/v1/courses/all`)
        setCourses(response.data)
        setLoading(false)
      }catch(err){
        setErr(true)
        console.log(err)
        setLoading(false)
      }
    }
    getAllCourses()
  },[token])

  return (
    <>
    <h1 className="courses-title">AVAILABLE COURSES</h1>
    {
      loading ?
      <div style={{textAlign:"center", marginTop:"40px"}}>Loading...</div>
      :
    err ?
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

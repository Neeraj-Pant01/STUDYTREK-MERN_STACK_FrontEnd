import React, { useEffect } from 'react'
import "./style.css"
import { useSelector } from 'react-redux'
import YourCourse from '../../components/YourCourse/YourCourse'
import { Link } from 'react-router-dom'

const YourCourses = () => {
    const user = useSelector((state)=>state.user.currentUser)
  return (
    <div className='your-c'>
      <b>Your Courses</b>
      <p>courses that you bought will appear here !</p>
      {
        user ?
        <YourCourse />
        :
        <Link style={{textDecoration:"underline", marginTop:"20px"}} to={'/'}>You need to login to view your courses ! </Link>
      }
    </div>
  )
}

export default YourCourses

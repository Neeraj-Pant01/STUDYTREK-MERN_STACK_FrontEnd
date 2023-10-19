import "./courses.css"
import Course from '../course/Course'
import Footer from "../footer/Footer"

const Courses = () => {
  return (
    <>
    <h1 className="courses-title">AVAILABLE COURSES</h1>
    <div className='Courses'>
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
    <Footer />
    </>
  )
}

export default Courses

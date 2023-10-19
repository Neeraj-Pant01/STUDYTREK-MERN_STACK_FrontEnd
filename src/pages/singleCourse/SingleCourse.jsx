import { Link, useNavigate } from "react-router-dom"
import "./singCourse.css"
import {AiOutlineFilePdf} from "react-icons/ai"
import { useEffect } from "react";

const SingleCourse = () => {
  const user = false;
  const navigate = useNavigate()

  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})
  },[])

  const handleNotes = () =>{
    if(user){

    }else{
      navigate('/', {
        state: {id:"form"}
      });
    }
  }
  return (
    <div className="SingleCourse-wrapper">
      <div className="COURSE-OUTCOMES">
        <h1 className="C-TITLE">JAVA PROGRAMMING</h1>
        <button className="notes-pdf" onClick={handleNotes}><AiOutlineFilePdf style={{color:"red",fontSize:"24px"}} /> Download Notes</button>
        <div className="course-options">
        <div className="course-option">
          <b>Online Test Series</b>
          <img src="/assets/test.png" alt="" />
          <Link to={user ? `/testseries`:`/`} className="view">View</Link>
        </div>
        <div className="course-option">
          <b>Interview Questions</b>
          <img src="/assets/interview.jpg" alt="" />
          <Link to={user ? `/interview-questions` : '/'} className="view">View</Link>
        </div>
        <div className="course-option">
          <b>Video Lectures</b>
          <img src="/assets/lecture.jpg" alt="" />
          <Link to={user ? `/lectures` : '/'} className="view">View</Link>
        </div>
        </div>
        <p className="course-buy">Unlock an array of incredible opportunities and supercharge your skills with our exclusive course. Elevate your potential and gain access to a world of invaluable resources today!</p>
        <Link to={`/buy/123`}>
        <button className="price"><span style={{color:"blueviolet"}}>Buy Premium</span> ₹499.00/</button>
        </Link>
      </div>
      <div className="COURSE-IMAGE">
        <img src="/assets/edu1.jpg" alt="" />
        <div className="bg">
          <h1>JAVA PROGRAMMING</h1>
          <h1 style={{color:"tomato"}}>₹1499.00 <span style={{color:"red"}}>X</span></h1>
          <h1 style={{color:"gold"}}>₹499.00 only <span style={{color:"green"}}>✓ ✓</span></h1>
        </div>
      </div>
    </div>
  )
}

export default SingleCourse

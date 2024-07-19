import { Link, useNavigate, useParams } from "react-router-dom"
import "./singCourse.css"
import {AiOutlineFilePdf} from "react-icons/ai"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const SingleCourse = () => {
  const user = useSelector((state)=>state.user.currentUser)
  const [currentCourse, setCurrentCourse] = useState()
  const navigate = useNavigate()
  const token = user.token;
  const {id} = useParams();
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})
    const getSingleCourse = async () =>{
      setLoading(true)
      try{
        const response = await axios.get(`${process.env.REACT_APP_URI}api/v1/courses/${id}`,{
          headers :{
            "Authorization" : `bearer ${token}`
          }
        })
        console.log("singlecourse",response)
        setCurrentCourse(response.data)
        setLoading(false)
      }catch(err){
        setLoading(false)
        console.log(err)
      }
    }
    getSingleCourse()
  },[id,token])


  const handleNotes = () =>{
    if(user){
        navigate('/notes',{
          state:currentCourse
        })
    }else{
      navigate('/', {
        state: {id:"form"}
      });
    }
  }
  return (
    <>
    {
      loading ?
      <div style={{textAlign:"center", marginTop:"40pc"}}>Loading....</div>
      :
      <div className="SingleCourse-wrapper">
      <div className="COURSE-OUTCOMES">
        <h1 style={{textTransform:"uppercase"}} className="C-TITLE">{currentCourse?.name}</h1>
        <button className="notes-pdf" onClick={handleNotes}><AiOutlineFilePdf style={{color:"red",fontSize:"24px"}} /> Download Notes</button>
        <div className="course-options">
        <div className="course-option">
          <b>Online Test Series</b>
          <img src="/assets/test.png" alt="" />
          <Link to={{
            pathname: user ? `/testseries`:`/`,
            state:{currentCourse : currentCourse}}} className="view">View</Link>
        </div>
        <div className="course-option">
          <b>Interview Questions</b>
          <img src="/assets/interview.jpg" alt="" />
          <div onClick={()=>navigate(user ? '/interview-questions' : '/',{
            state : currentCourse
          })} className="view">View</div>
        </div>
        <div className="course-option">
          <b>Video Lectures</b>
          <img src="/assets/lecture.jpg" alt="" />
          <div onClick={()=>navigate(user ? '/lectures' : '/',{
            state : currentCourse || {message:"buy the course to view the video lectures"}
          })} className="view">View</div>
        </div>
        </div>
        <p className="course-buy">Unlock an array of incredible opportunities and supercharge your skills with our exclusive course. Elevate your potential and gain access to a world of invaluable resources today!</p>
        <Link to={user ? `/buy/${id}` : '/'}>
        <button className="price"><span style={{color:"blueviolet"}}>Buy Premium</span> ₹{currentCourse?.price}/</button>
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
    }
    </>
  )
}

export default SingleCourse

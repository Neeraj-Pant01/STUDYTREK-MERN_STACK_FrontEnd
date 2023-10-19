import {useNavigate } from 'react-router-dom'
import './course.css'
import {AiOutlineCheck} from "react-icons/ai"

const Course = () => {
  const navigate = useNavigate();
  const user = true;

  const handleBuy = () =>{
    if(user){
      navigate(`/buy/123`)
    }else{
      const targetSection = document.getElementById('form');
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth',
        })}
    }
  }
  return (
    <div className='course'>
      <div className="course-wrapper">
        <sapn className="c-name">JAVA PROGRAMMING</sapn>
        <div className="course-details">
            <div className="details">
              <b className='COURSE-title'>COMPLETE JAVA COURSE</b>
              <ul>
                <li> <AiOutlineCheck style={{color:"green"}}/> Recorded Lectures</li>
                <li><AiOutlineCheck style={{color:"green"}}/> Notes</li>
                <li><AiOutlineCheck style={{color:"green"}}/> Weakly Test Series</li>
                <li><AiOutlineCheck style={{color:"green"}}/> Most Asked Inteview Questions</li>
                <li><AiOutlineCheck style={{color:"green"}}/> Doubt Clearing Sessions With The Top Experienced Teachers</li>
              </ul>
              <div className="price-button" onClick={handleBuy}>Buy Now at ₹499</div>
            </div>
            <div className="image">
              <img src="/assets/edu1.jpg" alt="course" />
            </div>
        </div>
        <button className='trial-btn' onClick={()=>navigate('/course/123')}>Try Free</button>
      </div>
    </div>
  )
}

export default Course

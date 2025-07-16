import { useNavigate } from 'react-router-dom'
import './course.css'
import { AiOutlineCheck } from "react-icons/ai"
import { useSelector } from 'react-redux';

const Course = ({ c }) => {
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user.currentUser)

  const handleBuy = () => {
    if (user) {
      navigate(`/buy/${c?._id}`)
    } else {
      navigate('/')
      const targetSection = document.getElementById('form');
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <div className='course-card'>
      <div className="course-card-inner">
        <div className="course-image">
          <img src={c.picture ? c.picture : "/assets/edu1.jpg"} alt="course" />
        </div>

        <div className="course-content">
          <h3 className="course-title">{c.name}</h3>
          <p className="course-desc">{c.desc}</p>

          <ul className="course-features">
            {
              c?.features ?
                c?.features.split(",").map((f, i) => (
                  <li key={i}><AiOutlineCheck className="check-icon" /> {f}</li>
                )) :
                <>
                  <li><AiOutlineCheck className="check-icon" /> Recorded Lectures</li>
                  <li><AiOutlineCheck className="check-icon" /> Notes</li>
                  <li><AiOutlineCheck className="check-icon" /> Weekly Test Series</li>
                  <li><AiOutlineCheck className="check-icon" /> Interview Questions</li>
                  <li><AiOutlineCheck className="check-icon" /> Doubt Support</li>
                </>
            }
          </ul>

          <div className="course-footer">
            <button className="try-btn" onClick={() => navigate(`/course/${c._id}`)}>🎓 Try Free</button>
            <button className="buy-btn" onClick={handleBuy}>Buy Now @ ₹{c.price}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course

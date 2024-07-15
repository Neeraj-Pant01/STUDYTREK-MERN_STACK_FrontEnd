import { useNavigate } from 'react-router-dom'
import './course.css'
import { AiOutlineCheck } from "react-icons/ai"

const Course = ({ c }) => {
  const navigate = useNavigate();
  const user = true;

  const handleBuy = () => {
    if (user) {
      navigate(`/buy/${c?._id}`)
    } else {
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
    <div className='course'>
      <div className="course-wrapper">
        <sapn className="c-name">{c?.name}</sapn>
        <div className="course-details">
          <div className="details">
            <b className='COURSE-title'>{c?.desc}</b>
            <ul>
              {
                c?.features.length > 0 ?
                  c?.features.map((f, i) => {
                    return (
                      <li key={i}> <AiOutlineCheck style={{ color: "green" }} />{f}</li>
                    )
                  })
                  :
                  <>
                    <li> <AiOutlineCheck style={{ color: "green" }} /> Recorded Lectures</li>
                    <li><AiOutlineCheck style={{ color: "green" }} /> Notes</li>
                    <li><AiOutlineCheck style={{ color: "green" }} /> Weakly Test Series</li>
                    <li><AiOutlineCheck style={{ color: "green" }} /> Most Asked Inteview Questions</li>
                    <li><AiOutlineCheck style={{ color: "green" }} /> Doubt Clearing Sessions With The Top Experienced Teachers</li>
                  </>
              }
            </ul>
            <div className="price-button" onClick={handleBuy}>Buy Now at ₹{c?.price}</div>
          </div>
          <div className="image">
            <img src={c.picture ? c?.picture : "/assets/edu1.jpg"} alt="course" />
          </div>
        </div>
        <button className='trial-btn' onClick={() => navigate(`/course/${c?._id}`)}>Try Free</button>
      </div>
    </div>
  )
}

export default Course

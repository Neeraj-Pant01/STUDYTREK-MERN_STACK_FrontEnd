import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='Footer'>
      <div className="footer-left">
        <b className='m-h'>CONTACT INFO</b>
        <b>email : </b><span>studytrek@gmail.com</span>
        <b>contact</b>
        <span>9998767876</span>
        <b></b>

      </div>
      <div className="footer-mid">
        <b className='m-h'>FOLLOW US :</b>
        <div className="socials">
            <AiFillLinkedin style={{color:"blue",cursor:"pointer"}} />
            <AiOutlineTwitter style={{color:"lightblue",cursor:"pointer"}}/>
            <AiFillFacebook style={{color:"skyblue",cursor:"pointer"}}/>
            <AiFillInstagram style={{color:"maroon",cursor:"pointer"}}/>
        </div>
      </div>
      <div className="footer-right">
        <b className='m-h'>USEFULL LINKS</b>
        <span>About</span>
        <span>Courses</span>
        <span>Contact</span>
        <span>Log Out</span>
      </div>
      <div className="footer-extra">
        <div className='img-div'>
        <img src="/assets/mainlogo.png" alt="" />
        <b>studyTrek</b>
        </div>
        <span>more than 10K active users</span>
        <span>Trust Of 50k students</span>
        <span>Land Dream Job</span>
        <span>Top Companies Interviews</span>
      </div>
    </div>
    </>
  )
}

export default Footer

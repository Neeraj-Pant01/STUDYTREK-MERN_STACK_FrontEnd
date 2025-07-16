import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-section contact">
        <h3>📞 Contact Info</h3>
        <p><strong>Email:</strong> studytrek@gmail.com</p>
        <p><strong>Phone:</strong> 9998767876</p>
      </div>

      <div className="footer-section social">
        <h3>🌐 Follow Us</h3>
        <div className="icons">
          <a href="#"><AiFillLinkedin title="LinkedIn" /></a>
          <a href="#"><AiOutlineTwitter title="Twitter" /></a>
          <a href="#"><AiFillFacebook title="Facebook" /></a>
          <a href="#"><AiFillInstagram title="Instagram" /></a>
        </div>
      </div>

      <div className="footer-section links">
        <h3>🔗 Useful Links</h3>
        <p>About</p>
        <p>Courses</p>
        <p>Contact</p>
        <p>Log Out</p>
      </div>

      <div className="footer-section brand">
        <img src="/assets/mainlogo.png" alt="StudyTrek Logo" />
        <h2>StudyTrek</h2>
        <p>📈 10K+ Active Users</p>
        <p>🎓 Trusted by 50K Students</p>
        <p>🚀 Land Your Dream Job</p>
        <p>🏢 Top Company Interviews</p>
      </div>
    </footer>
  );
};

export default Footer;

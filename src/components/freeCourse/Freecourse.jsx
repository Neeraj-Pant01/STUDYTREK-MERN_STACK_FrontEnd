import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'

const Freecourse = () => {
    const navigate = useNavigate();
    return (
        <div className='freecourse'>
            <b>GET A FREE COURSE</b>
            <div className='free-cont'>
                <b>Empowering Your Education</b>
                <p>We believe in making education accessible to everyone. That’s why we offer free course scholarships to eligible students. Whether you want to advance your skills, change your career path, or simply learn something new, our scholarship program can help you achieve your goals.</p>
            </div>
            <div className='apply'>
                <b>How to Apply for a Scholarship</b>
                <div className="eligibility">
                    <b>1. Eligibility Check</b>
                    <p>Review the eligibility criteria to see if you qualify for a scholarship. We consider factors such as academic performance, financial need, and personal motivation.</p>
                </div>

                <div className="eligibility">
                    <b>2. Application Form</b>
                    <p>Complete the scholarship application form with your details, including your current skills, educational background, and career aspirations.</p>
                </div>

                <div className="eligibility">
                    <b>3. Submit Supporting Documents</b>
                    <p>Attach any required documents, such as transcripts, recommendation letters, or a personal statement explaining why you deserve the scholarship.</p>
                </div>

                <div className="eligibility">
                    <b>4. Application Review</b>
                    <p>Our team will review your application and supporting documents to assess your eligibility.</p>
                </div>

                <div className="eligibility">
                    <b>5. Notification</b>
                    <p>If selected, you will receive a notification via email with further instructions on how to enroll in your chosen course for free.</p>
                </div>
            </div>
            <div className="form-btn">
            <button onClick={()=>navigate('/applicationform')}>APPLICATION FORM</button>
            </div>
        </div>
    )
}

export default Freecourse

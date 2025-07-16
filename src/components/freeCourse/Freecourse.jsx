import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaRegFileAlt, FaEnvelopeOpenText, FaUserCheck, FaClipboardList } from 'react-icons/fa';
import './style.css';

const steps = [
  {
    icon: <FaUserCheck />,
    title: 'Eligibility Check',
    desc: 'Review the eligibility criteria to see if you qualify for a scholarship. We consider academic performance, financial need, and personal motivation.',
  },
  {
    icon: <FaRegFileAlt />,
    title: 'Application Form',
    desc: 'Complete the scholarship application form with your details, including your skills, educational background, and career aspirations.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Submit Supporting Documents',
    desc: 'Attach required documents like transcripts, recommendation letters, or a personal statement explaining why you deserve the scholarship.',
  },
  {
    icon: <FaClipboardList />,
    title: 'Application Review',
    desc: 'Our team reviews your application and documents to assess eligibility.',
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: 'Notification',
    desc: 'If selected, you’ll receive an email with instructions on enrolling in your free course.',
  },
];

const Freecourse = () => {
  const navigate = useNavigate();

  return (
    <section className="freecourse-section">
      <div className="freecourse-header">
        <h2>Get a <span className="highlight">Free Course</span></h2>
        <p>Empowering Your Education — Accessible, inclusive scholarships designed to help you learn and grow.</p>
      </div>

      <div className="steps-container">
        {steps.map(({ icon, title, desc }, idx) => (
          <div key={idx} className="step-card">
            <div className="step-icon">{icon}</div>
            <div className="step-content">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="apply-btn-container">
        <button onClick={() => navigate('/applicationform')} className="apply-btn">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default Freecourse;

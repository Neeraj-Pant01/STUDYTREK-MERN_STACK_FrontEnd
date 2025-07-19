import React, { useState } from 'react';
import './HeroSection.css';
import { FaUserGraduate, FaRocket } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AiFillCloseSquare } from 'react-icons/ai';
import CustomAlert from '../customAlert/CustomAlert';
import AuthModel from './AuthModel';

const HeroSection = () => {
    const [openModal, setOpenModal] = useState(false);

    const [login, setLogin] = useState(false);



    return (
        <div className="hero-section">
            <div className="hero-text">
                <h1 ><FaRocket /> Launch Your Learning Journey</h1>
                <p>
                    Empower your future with engaging courses, expert guidance, and unlimited opportunities to grow.
                </p>
                <button className="cta-btn" onClick={() => setOpenModal(true)}>
                    Get Started For Free
                </button>
            </div>
            <div className="hero-image">
                <img src="/ad1.png" alt="Learning" />
            </div>

            {openModal && (
                <AuthModel setOpenModal={setOpenModal} login={login} setLogin={setLogin} />
            )}

        </div>
    );
};

export default HeroSection;

import React, { useState } from 'react';
import './HeroSection.css';
import { FaUserGraduate, FaRocket } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AiFillCloseSquare } from 'react-icons/ai';
import CustomAlert from '../customAlert/CustomAlert';

const HeroSection = () => {
    const [openModal, setOpenModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
        password: '',
        state: '',
    });
    const [login, setLogin] = useState(false);

    const user = useSelector((state) => state.user.currentUser)

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can send this to your API
        setOpenModal(false);
    };

    const handleLoginAndRegister = (e) => {
        e.preventDefault();
        if (user) {
            setShowAlert(true)
        }
    }

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
                <div className="modal-overlay" onClick={() => setOpenModal(false)}>
                    <div className="form-modal" onClick={(e) => e.stopPropagation()}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <h2><FaUserGraduate /> Join Now</h2>
                            <h2 onClick={() => setOpenModal(false)} style={{ cursor: "pointer" }}><AiFillCloseSquare /></h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {!login &&
                                <input name="username" onChange={handleChange} placeholder="Name" required />
                            }
                            <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
                            {!login &&
                                <input name="number" onChange={handleChange} placeholder="Mobile Number" required />
                            }
                            <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
                            {
                                !login &&
                                <select name="state" onChange={handleChange} required>
                                    <option value="">Select Your State</option>
                                    <option value="uttrakhand">Uttrakhand</option>
                                    <option value="haryana">Haryana</option>
                                </select>
                            }
                            {!login ?
                                <button onClick={handleLoginAndRegister} type="submit">Register</button>
                                :
                                <button onClick={handleLoginAndRegister} type="submit">Login</button>

                            }
                            {
                                !login ?
                                    <p onClick={() => setLogin(true)} style={{ color: "purple", textDecoration: "underline", cursor: "pointer" }}>already registed login</p>
                                    :
                                    <p onClick={() => setLogin(false)} style={{ color: "purple", textDecoration: "underline", cursor: "pointer" }}>want to register ?</p>
                            }
                        </form>
                    </div>
                </div>
            )}

            {
                showAlert && (
                    <CustomAlert
                        type="alert"
                        message={login ? "Alredy Logged In !" :"Already Registered !"}
                        onClose={() => setShowAlert(false)}
                    />
                )
            }
        </div>
    );
};

export default HeroSection;

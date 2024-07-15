import { useEffect, useState } from "react"
import Content from "../../components/content/Content"
import "./homepage.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {loginUser} from "../../redux/userSlice"
import Reviews from "../../components/reviews/Reviews"
import Freecourse from "../../components/freeCourse/Freecourse"

const Homepage = () => {
    const [registerDetails, setRegisterDetails] = useState({
        username: "",
        email: "",
        number: "",
        password: ""
    })
    const [login, setLogin] = useState(false)

    const dispatch = useDispatch()

    const user = useSelector((state) => state.user.currentUser)

    console.log(user)

    useEffect(() => {
        const form = document.getElementById("form");
        !user && form.scrollIntoView({ behavior: "smooth" })
    }, [user])

    const handleChnage = (e) => {
        const { name, value } = e.target;
        setRegisterDetails((pre) => {
            return {
                ...pre, [name]: value
            }
        })
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const response = login ? await axios.post(`${process.env.REACT_APP_URI}api/v1/auth/login`,registerDetails) : await axios.post(`${process.env.REACT_APP_URI}api/v1/auth/register`, registerDetails)
            setRegisterDetails({
                username: "",
                email: "",
                number: "",
                password: ""
            });
            if(response.status===200){
            dispatch(loginUser(response.data))
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="homepage">
                {
                    user ? 
                    <div className="log-info">
                        <h1>WELCOME BACK !</h1>
                        <span>{user.username}</span>
                        <p>
                        "Dive into our courses and discover the endless possibilities that continuous learning can bring to your personal and professional journey"
                        </p>
                    </div>
                     :
                    <form id="form">
                        <span className="notice">signUp now !</span>
                        <span className="title">Join Your Favorite Free Course Today!</span>
                        <span className="desc">Learn with engaging and entertaining examples that transform the learning process into an enjoyable and effortless experience.</span>
                        <b>Enter Your Details</b>
                        {!login && <input type="text" value={registerDetails.username} name="username" placeholder="enter your name" onChange={handleChnage}></input>}
                        <input type="email" value={registerDetails.email} name="email" placeholder="enter your email" onChange={handleChnage}></input>
                        {!login && <input type="text" value={registerDetails.number} name="number" placeholder="enter your mobile number" onChange={handleChnage}></input>}
                        <input type="password" value={registerDetails.password} name="password" placeholder="enter your password" onChange={handleChnage}></input>
                        {!login && <select>
                            <option value="">Select Your State</option>
                            <option value="">uttrakhand</option>
                            <option value="">haryana</option>
                        </select>}
                        <button className="signup" onClick={handleRegister}>{login ? "LOGIN" : "SIGNUP"} to continue</button>
                        {!login && <p className="login-link" onClick={()=>setLogin(true)}>already registered ? <b>LOGIN.</b></p>}
                        {
                            login &&
                            <p className="login-link" onClick={()=>setLogin(false)}>don't have an account ? <b>Register ?</b></p>
                        }
                    </form>
                }
            </div>
            {/* <Intro /> */}
            <Content />
            <Reviews />
            <Freecourse />
        </>
    )
}


export default Homepage
import { useEffect } from "react"
import Content from "../../components/content/Content"
import Footer from "../../components/footer/Footer"
import "./homepage.css"
import { useLocation } from "react-router-dom"

const Homepage = () => {
    const location = useLocation()
    console.log(location)

    const user = false;

    useEffect(()=>{
        const form = document.getElementById("form");
        !user && form.scrollIntoView({behavior:"smooth"})
    },[user])

    return (
        <>
        <div className="homepage">
            {
                !user ?
                <form id="form">
                <span className="notice">signUp now !</span>
                    <span className="title">Join Your Favorite Free Course Today!</span>
                    <span className="desc">Learn with engaging and entertaining examples that transform the learning process into an enjoyable and effortless experience.</span>
                    <b>Enter Your Details</b>
                    <input type="text" placeholder="enter your name"></input>
                    <input type="text" placeholder="enter your email"></input>
                    <input type="text" placeholder="enter your mobile number"></input>
                    <select>
                        <option value="">Select Your State</option>
                        <option value="">uttrakhand</option>
                        <option value="">haryana</option>
                    </select>
                    <button className="signup">SignUp to continue</button>
                </form>
                :
                <div> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est necessitatibus, numquam expedita, eligendi quas mollitia non pariatur temporibus cupiditate quidem porro obcaecati odio, repudiandae ratione vitae a rem debitis. Quisquam excepturi, laboriosam corporis id odio expedita! Accusamus dolorem dolores perspiciatis?
                </div>
            }
        </div>
        <Content />
        <Footer />
        </>
    )
}


export default Homepage
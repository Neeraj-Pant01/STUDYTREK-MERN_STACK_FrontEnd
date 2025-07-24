import Content from "../../components/content/Content"
import "./homepage.css"
import {useSelector } from "react-redux"
import Reviews from "../../components/reviews/Reviews"
import Freecourse from "../../components/freeCourse/Freecourse"
import HeroSection from "../../components/herosection/Herosection"
import Banners from "../../banners/Banners"

const Homepage = () => {

    const user = useSelector((state) => state.user.currentUser)

    return (
        <>
            <div className="homepage">
                <HeroSection />
            </div>
            {/* <Intro /> */}
            <Content />
            <Banners />
            <Reviews />
            <Freecourse />
        </>
    )
}


export default Homepage
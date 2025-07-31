import Content from "../../components/content/Content"
import "./homepage.css"
// import { useSelector } from "react-redux"
import Reviews from "../../components/reviews/Reviews"
import Freecourse from "../../components/freeCourse/Freecourse"
import HeroSection from "../../components/herosection/Herosection"
import Banners from "../../banners/Banners"
import Course from "../../components/course/Course"

const Homepage = () => {

    // const user = useSelector((state) => state.user.currentUser)
    const courses = [
        {
            _id: "1",
            name: "Mastering React with Hooks",
            desc: "A modern guide to React development using functional components and hooks.",
            price: 999,
            picture: "https://cdn.shopaccino.com/igmguru/products/react-js-training-igmguru_1474547454_l.jpg?v=531",
            stars: 4.8,
            totalStars: 150,
            notes: "PDFs included",
            lectures: "25",
            testSeries: "10 quizzes",
            features: "Real-world projects, live mentoring"
        },
        {
            _id: "2",
            name: "Complete Python for Beginners",
            desc: "From syntax to real-world applications. Perfect for absolute beginners.",
            price: 799,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLQuW_eo9vdILXV6fxWcG7-EtOrY5C_O1qw&s",
            stars: 4.6,
            totalStars: 120,
            notes: "100+ pages",
            lectures: "40",
            testSeries: "12 challenges",
            features: "Assignments, Doubt clearing sessions"
        },
        {
            _id: "3",
            name: "DSA in Java - Crack Interviews",
            desc: "Covers Arrays, Trees, Graphs, and Recursion with interview problems.",
            price: 1299,
            picture: "https://media.geeksforgeeks.org/wp-content/uploads/20221216123805/Top-Data-Structures-and-Algorithms-Courses-for-Java-Developers.png",
            stars: 4.9,
            totalStars: 200,
            notes: "Complete handbook",
            lectures: "60",
            testSeries: "20 tests",
            features: "Mock interviews, Resume review"
        }
    ]

    return (
        <>
            <div className="homepage">
                <HeroSection />
            </div>
            {/* <Intro /> */}
            <Content />
            <Banners />
            <Reviews />
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-600 mt-5">
                    Top Courses
                </h1>
                <div className="grid md:grid-cols-3 grid-cols-2">
                    {
                        courses.map((c, i) => <Course key={c._id || i} c={c} />)
                    }
                </div>
            </div>
            <Freecourse />
        </>
    )
}


export default Homepage
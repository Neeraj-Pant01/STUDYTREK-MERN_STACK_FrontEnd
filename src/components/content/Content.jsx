import { useEffect, useState } from "react"
import Course from "../course/Course"
import "./content.css"
import { useSelector } from "react-redux"
import { FaChalkboardTeacher, FaVideo, FaUserGraduate } from 'react-icons/fa';

const dummyCourses = [
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

const Content = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const token = useSelector((state) => state.user?.currentUser?.token)

    useEffect(() => {
        // Simulate API delay
        setTimeout(() => {
            setCourses(dummyCourses)
            setLoading(false)
        }, 800)
    }, [token])

    return (
        <div className='content'>
            <div className="content-wrapper">
                <div className="hero-icons">
                    <FaChalkboardTeacher className="hero-icon" title="Expert Teachers" />
                    <FaVideo className="hero-icon" title="Engaging Videos" />
                    <FaUserGraduate className="hero-icon" title="Personalized Learning" />
                </div>
                <h2 className="hero-title">
                    Creating Inclusive and Holistic Learning Programs for Students of All Abilities
                </h2>
                <p className="hero-subtitle">
                    Embrace Lifelong Learning with India's Finest Teachers, Engaging Video Lessons and Personalized Learning Journeys.
                </p>
            </div>
            <div className="avail-courses">
                {
                    loading
                        ? <div className="loading-text">Loading courses, please wait...</div>
                        : courses.map((c, i) => <Course key={c._id || i} c={c} />)
                }
            </div>
        </div>
    )
}

export default Content

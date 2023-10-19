import Course from "../course/Course"
import "./content.css"

const Content = () => {
    return (
        <div className='content'>
            <div className="content-wrapper">
                <h2>
                    Creating Inclusive and Holistic Learning Programs for Students of All Abilities
                </h2>
                <p>Embrace Lifelong Learning with India's Finest Teachers,
                    Engaging Video Lessons and Personalized Learning Journeys</p>
            </div>
            <div className="avail-courses">
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            </div>
        </div>
    )
}

export default Content

import React from 'react'
import "./notes.css"
import { Link, useLocation } from 'react-router-dom'

const Notes = () => {
  const location = useLocation();
  console.log(location.state)
  return (
    <div className='notes-wrapper'>
      {
        location.state?.notes ?
        <div className='wrapper-inter'>
          <b>INTERVIEW QUESTIONS LINK</b>
          <img src={location?.state?.picture} alt='' />
            <a href={`${location.state?.notes}`} target="_blank" rel='noreferrer'>visit notes</a>
        </div>
          :
                <>
                No Notes Available For this Lecture
                <div className='back-links'>
                <Link className='b-links-a' to={`/course/:123`}>Back To Course</Link>
                <Link className='b-links-a' to={`/courses`}>View Other Courses</Link>
                </div>
                </>
      }
    </div>
  )
}

export default Notes

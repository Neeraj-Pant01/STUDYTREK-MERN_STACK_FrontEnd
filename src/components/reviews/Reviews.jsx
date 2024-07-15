import React from 'react'
import Review from './Review'
import "./style.css"

const Reviews = () => {
  return (
    <div className="reviews">
      <b className='r-title'>HEAR FROM OUR STUDENTS</b>
      <div className="rev-container">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  )
}

export default Reviews

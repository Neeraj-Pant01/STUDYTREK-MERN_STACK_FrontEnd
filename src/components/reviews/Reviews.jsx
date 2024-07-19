import React from 'react'
import Review from './Review'
import "./style.css"
import { revData } from '../../data'

const Reviews = () => {
  return (
    <div className="reviews">
      <b className='r-title'>HEAR FROM OUR STUDENTS</b>
      <div className="rev-container">
        {
          revData.map((r,i)=><Review key={i} r={r} />)
        }
      </div>
    </div>
  )
}

export default Reviews

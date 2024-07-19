import React from 'react'

const Review = ({r}) => {
  return (
    <div className='review'>
        <div className="rev-top">
            <img src={r.img} alt='' />
            <div className='rev-left'>
                <b>{r.username}</b>
            </div>
        </div>
        <p>{r.rev}</p>
    </div>
  )
}

export default Review

import React from 'react'
import "./intro.css"
import { sliderData } from '../../data'

const Intro = () => {
  return (
    <div className='intro-cont'>
            <div className='intro-wrapper'>
        {
            sliderData.map((item,i)=>{
                return (
                    <div className='intro-img'>
                        <img src={item.img} alt='' />
                        <p>title</p>
                        </div>
                )
            })
        }
                {
            sliderData.map((item,i)=>{
                return (
                    <div className='intro-img'>
                        <img src={item.img} alt='' />
                        <p>title</p>
                        </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default Intro

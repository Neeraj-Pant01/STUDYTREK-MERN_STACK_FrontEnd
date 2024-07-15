import React, { useEffect } from 'react'
import "./style.css"

const ApplicationForm = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className='application'>
            <b>FILL OUT THE APPLICATION FORM</b>
            <form>
                <p>fill out the form carefully any wrong information would result in application termination</p>
                <label>Full Name</label>
                <input type='text' placeholder='enter your fullName' />

                <label>Enter Country</label>
                <input type='text' placeholder='enter your Country' />

                <label>Enter University / School /  college</label>
                <input type='text' placeholder='enter your University, college or school' />

                <label>Enter Your current Status</label>
                <input type='text' placeholder='enter your education status school, college etc' />

                <label>Annual income</label>
                <input type='text' placeholder='enter your Annual income' />

                <label>Purpose Of Schoolarship</label>
                <input type='text' placeholder='enter your purpose of schoolarship' />

                <b>attach the following documents also</b>
                <label htmlFor='img'>
                    <div className='docs'>Passport Size Photograph</div>
                </label>
                <input id='img' type='file' style={{ display: "none" }} />

                <label htmlFor='identity'>
                    <div className="docs">
                        Your Identity Proof Document</div></label>
                <input id='identity' type='file' style={{ display: "none" }} />

                <label htmlFor='marksheet'>
                    <div className="docs">
                        Your 10 marksheet or current class marksheet
                    </div>
                </label>
                <input id='marksheet' type='file' style={{ display: "none" }} />
            </form>
            <button className='submit-application'>submit</button>
        </div>
    )
}

export default ApplicationForm

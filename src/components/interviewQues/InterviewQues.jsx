import {useLocation } from 'react-router-dom'
import './interview.css'

const InterviewQues = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className='interv-wrapper'>
      {
        location.state?.interviewQuestions ?
        <div className='wrapper-inter'>
          <b>INTERVIEW QUESTIONS LINK</b>
          <img src={location?.state?.picture} alt='' />
            <a href={`${location?.state?.interviewQuestions}`} target="_blank" rel="noreferrer">visit interviewQuestions</a>
        </div>
        :
        <div className='no-que'>No interview questions available for this course !</div>
      }
    </div>
  )
}

export default InterviewQues

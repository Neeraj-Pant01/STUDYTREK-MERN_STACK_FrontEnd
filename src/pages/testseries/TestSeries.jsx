import { Link, useLocation } from 'react-router-dom'
import './testseries.css'

const TestSeries = () => {
  const location = useLocation();
  console.log(location)
  return (
    <>
      {
        location.state?.testSeries ?
          <div>
            {
              location.state?.testSeries
            }
          </div>
          :
          <div>
            No Notes Available For this Lecture
            <div className='back-links'>
              <Link className='b-links-a' to={`/course/${location?.state?._id}`}>Back To Course</Link>
              <Link className='b-links-a' to={`/courses`}>View Other Courses</Link>
            </div>
          </div>
    }
          </>
  )
}

      export default TestSeries

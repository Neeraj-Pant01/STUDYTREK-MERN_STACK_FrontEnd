import { useLocation } from 'react-router-dom'
import './lectures.css'

const VideoLectures = () => {
  const location = useLocation();
  console.log("location", location)
  return (
    <div className='vidoe-wrapper'>
      {
        location.VideoLectures ?
        <div> vidolectures </div>
        :
        <div className='not-bought'> u need to buy this course to get the video lectures </div>
      }
    </div>
  )
}

export default VideoLectures

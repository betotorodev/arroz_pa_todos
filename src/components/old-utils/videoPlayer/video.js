import ReactPlayer from 'react-player'
import './video.css'

export const Video = () => {
  return (
  <div className="container">
    <ReactPlayer 
      url="https://www.youtube.com/watch?v=IK-bdPkwKJM&t=1s"
      width="100%"
      height="100%"
      playing={true}
      controls={false}
      muted
      loop={true}
      className="player"
    />
{/*     <video
      controls
      loop
      muted
      autoPlay
      className="player"
      playsInline
      >
        <source src="../../assets/video.mp4" />
      </video> */}
  </div>
  )
}
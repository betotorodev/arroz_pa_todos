import ReactPlayer from 'react-player'
import './video.css'

export const Video = () => {
  return (
  <div className="container">
    <ReactPlayer 
      url="https://www.youtube.com/watch?v=IK-bdPkwKJM"
      width="100%"
      height="100%"
      playing={true}
      controls={false}
      muted
      loop={true}
      className="player"
      config={{
        youtube: {
          playerVars: { 
            'showinfo': 1,
            'controls': 0
          }
        }
      }}
    />
  </div>
  )
}
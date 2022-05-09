import ReactPlayer from 'react-player'
import './video.css'

export const Video = () => {
  return (
    <div className="container">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IK-bdPkwKJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}
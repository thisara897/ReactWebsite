import React from 'react'
import './VedioBackground.css' 
import FPVDrone from '../assets/FPVDrone.mp4'


function VedioBackground() {
  return (
    <div>
      <div className="Video-container">
        <video autoPlay muted loop className = "video-background">
            <source src={FPVDrone} type="video/mp4"/>
        </video>
      </div>
      
    </div>
  )
}

export default VedioBackground;
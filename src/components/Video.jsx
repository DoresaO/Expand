import React from 'react';
import '../styles/Video.css';

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video className="video" autoPlay loop muted>
        <source src={require('../assets/Video/Untitled design.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;

import React from 'react';
import '../styles/Video.css';

const VideoComponent1 = () => {
  return (
    <div className="video-container">
      <video className="video" autoPlay loop muted>
        <source src={require('../assets/Video/Untitled design (1).mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent1;

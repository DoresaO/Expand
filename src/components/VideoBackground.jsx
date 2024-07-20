import React, { useRef } from 'react';
import '../styles/VideoBackground.css';
import backgroundVideo from '../assets/VideoBackground/videoB.mp4';
import laptopimg from '../assets/VideoBackground/91374_1-removebg-preview.png';
import foregroundVideo from '../assets/VideoBackground/Rope.mp4';

const VideoBackgroundComponent = () => {
  const foregroundVideoRef = useRef(null);

  const handleForegroundVideoClick = () => {
    if (foregroundVideoRef.current) {
      foregroundVideoRef.current.playbackRate = 2;
      foregroundVideoRef.current.play();
    }
  };

  return (
    <div className="video-background-container">
      <video className="background-video" src={backgroundVideo} autoPlay loop muted />

      {/* Image element positioned beneath the foreground video */}
      <img className="laptop-image" src={laptopimg} alt="Laptop displaying video" />

      <div className="foreground-video-container" onClick={handleForegroundVideoClick}>
        <video
          className="foreground-video"
          src={foregroundVideo}
          muted
          ref={foregroundVideoRef}
          playbackRate={2} // Adjust playbackRate to control speed
        />
      </div>
    </div>
  );
};

export default VideoBackgroundComponent;

import React from 'react';
import '../styles/Us.css';
import backgroundImage from '../assets/US/element.png'; 
import image1 from '../assets/US/viber_image_2023-03-14_09-43-31-132.jpg';
import image2 from '../assets/US/ryoji-iwata-n31JPLu8_Pw-.png';
import video1 from '../assets/US/V1.mp4';
import video2 from '../assets/US/V2.mp4';

const Us = () => {
  return (
    <div className="us-container">
      <div className="background-color"></div>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="content-container">
        <div className="row">
          <video id="video1" className="media" autoPlay loop muted>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 id='text1'>Stay on top of <span >TRENDS</span></h3>
        </div>

        <div className="row">
        <h3 id='text2'>We don't work <span>HARD</span> we work <span >SMART</span></h3>
         <img id="image1" src={image1} alt="" className="media" />
        </div>

        <div className="row">
          <video id="video2" className="media" autoPlay loop muted>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 id='text3'>Maximize your <span >REACH</span></h3>
        </div>

        <div className="row">
        <h3 id='text4'>Target the right <span >AUDIENCE</span></h3>
          <img id="image2" src={image2} alt="" className="media" />
        </div>
      </div>
    </div>
  );
};

export default Us;

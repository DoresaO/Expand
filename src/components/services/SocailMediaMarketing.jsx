import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServisesPages.css';
import img from '../../assets/ServisesPages/digital-marketing.png';

const SocialMediaMarketing = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="services-page">
      <button className="back-button" onClick={() => navigate('/services')}>
        <span className="circle">←</span>
      </button>
      <div className="content">
        <div className="text">
          <h1>Social Media Marketing</h1>
          <hr /> 
          <p>Drive a return on investment (ROI) from places like Facebook, Instagram and LinkedIn with socail media services from Expand.</p>
        </div>
        <div className="image">
          <img src={img} alt="Social Media Marketing" />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;

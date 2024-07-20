import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServisesPages.css';
import img from '../../assets/ServisesPages/ilustration.png';

const SocialMediaManagement = () => {
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
          <h1>Social Media Management</h1>
          <hr /> 
          <p>Social media marketing is the use of socail media platforms and websites to promote a product or service.</p>
        </div>
        <div className="image">
          <img src={img} alt="Social Media Management" />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagement;

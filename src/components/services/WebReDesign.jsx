import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServisesPages.css';
import img from '../../assets/ServisesPages/website re-design.png';

const WebReDesign = () => {
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
          <h1>Website Re-Design</h1>
          <hr /> 
          <p>A website redesign is a high-level overhaul that involves significantly changing elements like the code.</p>
        </div>
        <div className="image">
          <img src={img} alt="Website Re-Design" />
        </div>
      </div>
    </div>
  );
};

export default WebReDesign;

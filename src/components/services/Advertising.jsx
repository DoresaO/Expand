import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServisesPages.css';
import img from '../../assets/ServisesPages/social-media-marketing.png';

const Advertising = () => {
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
          <h1>Outdoor Advertising</h1>
          <hr /> 
          <p>Out-of-home advertising, also called outdoor advertising, outdoor media and out-of-home media advertising.</p>
        </div>
        <div className="image">
          <img src={img} alt="Outdoor Advertising" />
        </div>
      </div>
    </div>
  );
};

export default Advertising;

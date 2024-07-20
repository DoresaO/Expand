import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServisesPages.css';
import img from '../../assets/ServisesPages/credit-card.png';

const DigitalCard = () => {
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
          <h1>Digital Card</h1>
          <hr /> 
          <p>NFC stands for near-field communication. It\'s a standard for devices to communicate with each other wireless.</p>
        </div>
        <div className="image">
          <img src={img} alt="Digital Card" />
        </div>
      </div>
    </div>
  );
};

export default DigitalCard;

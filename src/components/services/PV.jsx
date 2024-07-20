import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServisesPages.css';
import img from '../../assets/ServisesPages/photoshoting.png';

const PV = () => {
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
          <h1>Photography & Video Production</h1>
          <hr /> 
          <p>Best Photo & Video Production Ltd, provides both SMEs and large multinationals with video and photography production services.</p>
        </div>
        <div className="image">
          <img src={img} alt="Photography & Video Production" />
        </div>
      </div>
    </div>
  );
};

export default PV;

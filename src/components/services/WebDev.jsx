import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServisesPages.css';
import img from '../../assets/ServisesPages/Ã‘Ã«Ã®Ã© 1.png';

const WebDevelopment = () => {
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
          <h1>Website development</h1>
          <hr /> 
          <p>Web development is the work involved in developing a website for the internet or an intranet.</p>
        </div>
        <div className="image">
          <img src={img} alt="Website development" />
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;

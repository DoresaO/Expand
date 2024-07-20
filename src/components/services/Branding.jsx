import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServisesPages.css';
import img from '../../assets/ServisesPages/Frame.png';

const Branding = () => {
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
          <h1>Branding</h1>
          <hr /> 
          <p>Branding is the process of creating a strong, positive perception of a company. It's products or services in the customer's mind.</p>
        </div>
        <div className="image">
          <img src={img} alt="Branding" />
        </div>
      </div>
    </div>
  );
};

export default Branding;

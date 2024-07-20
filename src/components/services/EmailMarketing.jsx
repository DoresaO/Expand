import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServisesPages.css';
import img from '../../assets/ServisesPages/e-mail.png';

const EmailMarketing = () => {
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
          <h1>E-mail Marketing</h1>
          <hr /> 
          <p>E-mail marketing is the act of sending a commercial message, typically to a group of people, using email.</p>
        </div>
        <div className="image">
          <img src={img} alt="E-mail Marketing" />
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;

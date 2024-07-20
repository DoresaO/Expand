import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServisesPages.css';
import img from '../../assets/ServisesPages/full-stack.png';

const Seo = () => {
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
          <h1>SEO</h1>
          <hr /> 
          <p>SEO stands for "search engine optimization". In simple terms, it means the process of improving your site to increase its visibility when people search for products or services.</p>
        </div>
        <div className="image">
          <img src={img} alt="SEO" />
        </div>
      </div>
    </div>
  );
};

export default Seo;

import React, { useEffect } from 'react';
import '../styles/HomeCo.css';
import Navbar from './Navbar';
import Footer from './Footer';
import img from '../assets/Cyberoar/cyberoar logo( BRANDBOOK-01.png';
import img1 from '../assets/Cyberoar/cyberoar logo( BRANDBOOK-02.png';
import img2 from '../assets/Cyberoar/cyberoar logo( BRANDBOOK-04.png';
import img3 from '../assets/Cyberoar/cyberoar logo( BRANDBOOK-03.png';
import img4 from '../assets/Cyberoar/cyberoar logo( BRANDBOOK-06.png';
import img5 from '../assets/Cyberoar/cyberoar logo( BRANDBOOK-07.png';
import img6 from '../assets/Cyberoar/cyberoar logo( BRANDBOOK-13.png';
import img7 from '../assets/Cyberoar/cyberoar logo( BRANDBOOK-16.png';
import img8 from '../assets/Cyberoar/cyberoar logo( BRANDBOOK-18.png';
import img9 from '../assets/Cyberoar/cyberoar logo( BRANDBOOK-27.png';
import img10 from '../assets/Cyberoar/cyberoar logo( BRANDBOOK-25.png';
import img11 from '../assets/Cyberoar/Mockup.jpg';


const Cyberoar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar isSpecialPage={true} />
      <div className="homeco-container">
        <div className="vertical-line"></div>
        <div className="title-container">
          <p className="rebranding-title">Rebranding</p>
          <h1 className="homeco-title">Cyberoar</h1>
        </div>
        <div className="content-container">
          <div className="image-container">
            <div className="image-item">
              <img src={img} alt="" />
            </div>
            <div className="image-item">
              <img src={img1} alt="" />
            </div>
            <div className="image-item">
              <img src={img2} alt="" />
            </div>
            <div className="image-item">
              <img src={img3} alt="" />
            </div>
            <div className="image-item">
              <img src={img4} alt="" />
            </div>
            <div className="image-item">
              <img src={img5} alt="" />
            </div>
            <div className="image-item">
              <img src={img6} alt="" />
            </div>
            <div className="image-item">
              <img src={img7} alt="" />
            </div>
            <div className="image-item">
              <img src={img8} alt="" />
            </div>
            <div className="image-item">
              <img src={img9} alt="" />
            </div>
            <div className="image-item">
              <img src={img10} alt="" />
            </div>
            <div className="image-item">
              <img src={img11} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer isSpecialPage={true} />
    </div>
  );
};

export default Cyberoar;

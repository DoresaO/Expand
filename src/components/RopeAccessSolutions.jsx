import React, { useEffect } from 'react';
import '../styles/HomeCo.css';
import Navbar from './Navbar';
import Footer from './Footer';
import img from '../assets/RopeAccessSolutions/Artboard 26.png';
import img1 from '../assets/RopeAccessSolutions/BRANDING- prezentim-05.png';
import img2 from '../assets/RopeAccessSolutions/BRANDING- prezentim-03.png';
import img3 from '../assets/RopeAccessSolutions/BRANDING- prezentim-18.png';
import img4 from '../assets/RopeAccessSolutions/BRANDING- prezentim-06.png';
import img5 from '../assets/RopeAccessSolutions/BRANDING- prezentim-16.png';
import img6 from '../assets/RopeAccessSolutions/BRANDING- prezentim-19.png';
import img7 from '../assets/RopeAccessSolutions/BRANDING- prezentim-17.png';
import img8 from '../assets/RopeAccessSolutions/BRANDING- prezentim-09.png';
import img9 from '../assets/RopeAccessSolutions/BRANDING- prezentim-14.png';
import img10 from '../assets/RopeAccessSolutions/BRANDING- prezentim-12.png';
import img11 from '../assets/RopeAccessSolutions/Free Outdoor Building Advertising Billboard Mockup PSD File.jpg';
import img12 from '../assets/RopeAccessSolutions/Free Outdoor Vertical Poster Mockup.jpg';


const RopeAccessSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar isSpecialPage={true} />
      <div className="homeco-container">
        <div className="vertical-line"></div>
        <div className="title-container">
          <p className="rebranding-title">Branding</p>
          <h1 className="homeco-title">Rope Access Solutions Sweden </h1>
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
            <div className="image-item">
              <img src={img12} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer isSpecialPage={true} />
    </div>
  );
};

export default RopeAccessSolutions;

import React, { useEffect } from 'react';
import '../styles/HomeCo.css';
import Navbar from './Navbar';
import Footer from './Footer';
import img from '../assets/HomeCo/Untitled-2-02.png';
import img1 from '../assets/HomeCo/3-03.jpg';
import img2 from '../assets/HomeCo/Untitled-2-16.png';
import img3 from '../assets/HomeCo/19-20-03.png';
import img4 from '../assets/HomeCo/Untitled-2-05.png';
import img5 from '../assets/HomeCo/Untitled-2-03.png';
import img6 from '../assets/HomeCo/Untitled-2-04.png';
import img7 from '../assets/HomeCo/16-16.png';
import img8 from '../assets/HomeCo/19-20-04.png';
import img9 from '../assets/HomeCo/Untitled-2-11.png';
import img10 from '../assets/HomeCo/Untitled-2-15.png';
import video from '../assets/HomeCo/hc.mp4';

const HomeCo = () => {
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
          <h1 className="homeco-title">Hello.CO</h1>
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
            <div className="video-item">
              <video autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="image-item">
              <img src={img10} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer isSpecialPage={true} />
    </div>
  );
};

export default HomeCo;

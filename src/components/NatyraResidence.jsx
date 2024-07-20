import React, { useEffect } from 'react';
import '../styles/HomeCo.css';
import Navbar from './Navbar';
import Footer from './Footer';
import img from '../assets/NatyraResidence/e5096de6-b2d9-47fc-b6d5-20981a6b3530.png';
import img1 from '../assets/NatyraResidence/66c3d2b2-6642-459c-83ea-47dc04155fce.png';
import img2 from '../assets/NatyraResidence/306c5e29-42b7-4b97-a3ce-f1ec64470620.png';
import img3 from '../assets/NatyraResidence/925824d1-711e-4672-8672-e527fd90484a.png';
import img4 from '../assets/NatyraResidence/pexels-monstera-6373844.jpg';
import img5 from '../assets/NatyraResidence/Free-Bus-Shelter-Outdoor-Advertising-Mockup-PSD-File-2.jpg';
import img6 from '../assets/NatyraResidence/Free_Stationery_Mockup_4.jpg';
import img7 from '../assets/NatyraResidence/Free_T-Shirt_Mockup_1.jpg';
import img8 from '../assets/NatyraResidence/Lanyard_ID_badge_mockup_3.jpg';
import img9 from '../assets/NatyraResidence/Flag_mockup_06.jpg';
import img10 from '../assets/NatyraResidence/Round_Badge_Mockup.jpg';
import img11 from '../assets/NatyraResidence/pexels-cottonbro-6565757.jpg';
import img12 from '../assets/NatyraResidence/3f8b09b8-e154-49c9-87ae-b5293e0f58aa.png';
import img13 from '../assets/NatyraResidence/d1022bd0-9da2-4f43-ad9e-6e2ddbce502a.png';


const NatyraResidence = () => {
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
          <h1 className="homeco-title">Natyra Residence</h1>
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
            <div className="image-item">
              <img src={img13} alt="" />
            </div>
            
          </div>
        </div>
      </div>
      <Footer isSpecialPage={true} />
    </div>
  );
};

export default NatyraResidence;

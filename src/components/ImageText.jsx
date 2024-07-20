import React from 'react';
import '../styles/ImageText.css';
import image from '../assets/IText/a816e1a02ca31753ed68d163294fce67.jpg';

const ImageText = () => {
  return (
    <div className="image-text-container">
      <img src={image} alt="" className="image" />
      <div className="text-container">
        <p className="bold-text">	We offer professional services for the creation and maintenance of your online existence</p>
        <p className="regular-text">	Expand has been operating since 2018. Our team has succeeded in many different high-profile projectsaround the world.</p>
      </div>
    </div>
  );
};

export default ImageText;

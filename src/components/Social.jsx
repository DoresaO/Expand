import React from 'react';
import '../styles/Social.css';

// Importing 5 different images
import image5 from '../assets/social media/durimdervishaj.png';
import image3 from '../assets/social media/ndertimtari.png';
import image1 from '../assets/social media/sahatqiu.png';
import image4 from '../assets/social media/seraphine plaza.png';
import image2 from '../assets/social media/valibrillant.png';

const Social = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="social-container">
      <h1 className="social-title">SOCIAL <span className="outline-text">MEDIA</span></h1>
      <div className="social-images-row">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Social ${index + 1}`} className="social-image" />
        ))}
      </div>
    </div>
    
  );
};

export default Social;

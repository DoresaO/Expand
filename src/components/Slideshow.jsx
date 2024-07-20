import React, { useState } from 'react';
import '../styles/Slideshow.css'; // Assuming your styles are in a CSS file
import image1 from '../assets/SlideShow/viber_image_2023-03-14_09-37-57-926.jpg';
import image2 from '../assets/SlideShow/viber_image_2023-03-14_09-37-57-926.jpg';
import image3 from '../assets/SlideShow/viber_image_2023-03-14_09-37-57-926.jpg';
import image4 from '../assets/SlideShow/viber_image_2023-03-14_09-37-57-926.jpg';

function Slideshow() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (index) => {
    if (enlargedImage === index) {
      setEnlargedImage(null);
    } else {
      setEnlargedImage(index);
    }
  };

  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
  ];

  return (
    <div className="slideshow-container">
      <h1 className="title">M  E  E  T  I  N  G  S</h1>
      <div className="slideshow-row">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slideshow-item ${enlargedImage === index ? 'enlarged' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={image.src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
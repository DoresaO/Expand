import React, { useState, useEffect, useRef } from 'react';
import '../styles/ClientSlider.css';

const ClientSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderHeight, setSliderHeight] = useState('auto');
  const slideRefs = useRef([]);

  const slides = [
    { company: 'Sahatciu', work: 'Sunglasses&whatches store', comment: '" Since I started working with Expand, my business has really expanded. "' },
    { company: 'Artmotion', work: 'Graphic Design', comment: '" It is a pleasure to work with the Expand. "' },
    { company: 'Orchidee', work: 'Real Estate Company', comment: '" The hospitality is amazing, always ready to help you. "' },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Calculate the height based on the tallest slide
    const heights = slideRefs.current.map(ref => ref.clientHeight);
    setSliderHeight(Math.max(...heights));
  }, []);

  return (
    <div className="client-slider-container">
      <h1 className="big-title1">WHAT OUR CLIENTS ARE SAYING</h1> {/* Big title outside of the slider */}
      <div className="slider" style={{ minHeight: sliderHeight }}>
        <div className="slider-header">
          <span className="slide-number">{currentSlide + 1}-{slides.length}</span>
          <div className="slider-arrows">
            <button onClick={handlePrevSlide}>&#8592;</button>
            <button onClick={handleNextSlide}>&#8594;</button>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content" ref={el => slideRefs.current[currentSlide] = el}>
            <div className="comment">{slides[currentSlide].comment}</div> 
            <div className="company-name">{slides[currentSlide].company}</div>
            <div className="separator"></div>
            <div className="company-work">{slides[currentSlide].work}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;

import React, { useState, useEffect } from 'react';
import '../styles/ScrollIndicator.css';

const ScrollIndicator = ({ onScroll }) => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
    setShowScrollIndicator(false);
    if (onScroll) {
      onScroll();
    }
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShowScrollIndicator(true);
    } else {
      setShowScrollIndicator(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showScrollIndicator ? (
    <div className="scroll-indicator" onClick={handleScrollDown}>
      <div className="mouse-icon">
        <div className="mouse-wheel"></div>
      </div>
    </div>
  ) : null;
};

export default ScrollIndicator;

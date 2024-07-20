import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import backgroundImage from '../assets/Hero/hero.jpg'; // Adjust the path as needed
import logoImage from '../assets/Logo-Z/z-white.png'; // Adjust the path as needed
import CookieConsent from './CookieConsent'; // Adjust the path as needed
import ScrollIndicator from './ScrollIndicator'; // Adjust the path as needed

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleAcceptCookies = () => {
    console.log('Cookies accepted');
    // Additional logic for cookie acceptance if needed
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
    setScrolled(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`hero ${scrolled ? 'scrolled' : ''}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative', // Ensure background image positioning
      }}
    >
      <div className="gradient-overlay"></div>
      <img src={logoImage} alt="Your Logo" className={`animated-logo ${scrolled ? 'scrolled-logo' : ''}`} />
      <div className={`text-content ${scrolled ? 'scrolled-text' : ''}`}>
        WE ARE <span>EXPAND</span>
      </div>
      {scrolled && <div className="new-text">LET'S EXPAND YOUR COMPANY WITH US </div>}
      <ScrollIndicator onScroll={handleScrollDown} />
      <CookieConsent onAccept={handleAcceptCookies} />
    </div>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/Logo-Z/z-white.png';

const Navbar = ({ isSpecialPage }) => {
  const [isOpaque, setIsOpaque] = useState(false);

  /* Function to handle smooth scroll or route change to 'Let's Talk' section */
  const handleScrollOrRoute = (event) => {
    event.preventDefault();
    const targetId = isSpecialPage ? "/lets-talk" : event.currentTarget.getAttribute("href");
    if (targetId) {
      if (isSpecialPage) {
        // Navigate to /lets-talk for special pages
        window.location.href = targetId;
      } else {
        // Smooth scroll to #letstalk for non-special pages
        const targetElement = document.getElementById(targetId.substring(1));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  /* Effect to handle navbar opacity on scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsOpaque(true);
      } else {
        setIsOpaque(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* Function to scroll to top when logo is clicked */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`navbar ${isOpaque || isSpecialPage ? 'opaque' : 'transparent'}`}>
      {!isSpecialPage && (
        <div className="navbar-item">
          <Link to="/services">Services</Link>
        </div>
      )}
      <div className="navbar-logo">
        {/* Logo that scrolls to the top of the page when clicked */}
        <Link to="/" onClick={scrollToTop}>
          <img src={logo} alt="Logo" style={{ cursor: 'pointer' }} />
        </Link>
      </div>
      <div className="navbar-item">
        {/* Conditional link based on isSpecialPage */}
        <a href={isSpecialPage ? "/lets-talk" : "#letstalk"} onClick={handleScrollOrRoute}>
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

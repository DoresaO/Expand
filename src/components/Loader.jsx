import React from 'react';
import '../styles/Loader.css';
import logo from '../assets/Logo-Z/z-white.png'; // Update the path to your custom logo

const Loader = () => {
  return (
    <div className="loader">
      <img src={logo} alt="Loading..." />
      <div className="line-loader"></div>
    </div>
  );
};

export default Loader;

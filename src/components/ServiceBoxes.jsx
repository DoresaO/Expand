import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServiceBoxes.css';

const ServiceBoxes = () => {
  return (
    <div className="service-boxes">
      <div className="service-box" >
        <h2><span className="circle"></span>Social Media Management</h2>
        <p>Social media marketing is the use of social media platforms and websites to promote a product or service.</p>
      </div>
      <div className="service-box">
        <h2><span className="circle"></span>Website Development</h2>
        <p>Web development is the work involved in developing a website for the internet or an intranet.</p>
      </div>
      <div className="service-box">
        <h2><span className="circle"></span>Branding</h2>
        <p>Branding is the process of creating a strong, positive perception of a company, its products, or services in the customer's mind.</p>
      </div>
      <Link to="/services" className="show-more">see all</Link>
    </div>
  );
};

export default ServiceBoxes;

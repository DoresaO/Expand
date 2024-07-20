import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/OrWebsites.css';
import image1 from '../assets/OrWebsites/Untitled-2-12.png'; // Import your images
import image2 from '../assets/OrWebsites/Mockup.jpg'; // Import more images as needed
import image3 from '../assets/OrWebsites/Free Outdoor Building Advertising Billboard Mockup PSD File.jpg'; // Import more images as needed
import image4 from '../assets/OrWebsites/pexels-monstera-6373844.jpg'; // Import more images as needed

const OrWebsites = () => {
  return (
    <div className="or-websites-container">
      <div className="row">
        <div className="text-container1">
          <p>Rebranding</p>
          <h3 > Home.co</h3>
          <div className='row2'>
            <Link to="/home-co" className="button">Explore more</Link>
            <Link to="/home-co" className="button">→</Link>
          </div>
        </div>
        <div className="website">
          <Link to="/home-co">
            <img src={image1} alt="Website Preview 1" className="website-preview" />
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="website">
          <Link to="/cyberoar">
            <img src={image2} alt="Website Preview 2" className="website-preview" />
          </Link>
        </div>
        <div className="text-container2">
          <p>Branding</p>
          <h3>Cyberoar</h3>
          <div className='row1'>
            <Link to="/cyberoar" className="button">Explore more</Link>
            <Link to="/cyberoar" className="button">→</Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="text-container1">
          <p>Branding</p>
          <h3>Rope Access <br />
            Solutions  <br />
            Sweden</h3>
          <div className='row2'>
            <Link to="/rope-access-solutions" className="button">Explore more</Link>
            <Link to="/rope-access-solutions" className="button">→</Link>
          </div>
        </div>
        <div className="website">
          <Link to="/rope-access-solutions">
            <img src={image3} alt="Website Preview 3" className="website-preview" />
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="website">
          <Link to="/natyra-residence">
            <img src={image4} alt="Website Preview 4" className="website-preview" />
          </Link>
        </div>
        <div className="text-container2">
          <p>Rebranding</p>
          <h3>Natyra <br />
            Residence</h3>
          <div className='row1'>
            <Link to="/natyra-residence" className="button">Explore more</Link>
            <Link to="/natyra-residence" className="button">→</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrWebsites;

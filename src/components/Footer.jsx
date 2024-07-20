import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet for custom icons
import '../styles/Footer.css';
import logo from '../assets/Logo-Z/z-white.png'; // Adjust the path to your logo image
import facebookIcon from '../assets/Icons/output-onlinepngtools (3).png'; // Adjust the path to your social media icons
import instagramIcon from '../assets/Icons/output-onlinepngtools.png';
import tiktokIcon from '../assets/Icons/output-onlinepngtools (2).png';
import linkedinIcon from '../assets/Icons/output-onlinepngtools (1).png';
import customIconUrl from '../assets/Icons/location-pin.png'; 
const Footer = ({ isSpecialPage }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, []);

  // Create custom icon
  const customIcon = L.icon({
    iconUrl: customIconUrl,
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41], // size of the shadow
  });

  // Example array of markers with real coordinates and comments
  const markers = [
    { position: [40.78497744185651, -73.9789381897243], comment: 'New York, NY 10024 United States 2248 Broadway #1500' },
    { position: [42.66173294638295, 20.27556256656602], comment: 'Peje, Kosovo' },
    { position: [42.66179741503933, 21.165377540982913], comment: 'Prishtinë, Kosovo' },
    { position: [41.32854429909457, 19.81793489041957], comment: 'Tirana, Albania' },
    // Add more markers as needed
  ];

  return (
    <div className="footer-container">
      {!isSpecialPage && (
        <div className="location-map">
          <MapContainer
            center={[42.66179741503933, 21.165377540982913]}
            zoom={12}
            scrollWheelZoom={true}
            className="leaflet-container"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                icon={customIcon} // Use the custom icon
              >
                <Popup>{marker.comment}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}

      <div className="footer-content">
        <div className="footer-section left">
          <div className="logo-expand-container">
            <img src={logo} alt="Logo" className="logo" />
            <p className="expand-text">expand</p>
          </div>
          <>
            <div className="footer-logo-title">Social Media</div>
            <div className="social-media">
              <a href="https://www.facebook.com/zgjerohu.agency/photos/?_rdr" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/zgjerohu/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.tiktok.com/@zgjerohu?lang=en" target="_blank" rel="noopener noreferrer">
                <img src={tiktokIcon} alt="TikTok" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
              </a>
            </div>
          </>
        </div>
        <div className="footer-section center">
          <h2>Contact Us</h2>
          <p>+1 (516) 800 -4738</p>
          <p>expandagencyglobal@gmail.com</p>
        </div>
        <div className="footer-section right">
          <h2>Visit Us</h2>
          <p>New York, NY 10024 United States 2248 Broadway #1500</p>
          <p>Peje, Kosovo - +383 48 804 80 5</p>
          <p>Prishtinë, Kosovo - +383 48 804 805</p>
          <p>Tirana, Albania - +355 69 675 0743</p>
        </div>
      </div>
      <p className="lastp">&copy; Copyright 2024 All Rights Reserved expand marketing</p>
    </div>
  );
};

export default Footer;

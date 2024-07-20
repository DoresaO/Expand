import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../styles/CookieConsent.css';

const CookieConsent = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 }); // Set cookie for 1 year
    setIsVisible(false);
    onAccept();
  };

  const handleReadMore = () => {
    alert('Read more about our cookie policy.'); // Replace with your actual policy link or content
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <p>We use cookies to improve your experience. Do you accept cookies?</p>
      <div className="buttons">
        <button className="accept" onClick={handleAccept}>Accept</button>
        <button className="read-more" onClick={handleReadMore}>Read More</button>
      </div>
    </div>
  );
};

export default CookieConsent;

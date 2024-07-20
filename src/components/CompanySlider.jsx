import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import the styles
import logo1 from '../assets/LogoKlientave/1.png';
import logo2 from '../assets/LogoKlientave/2.png';
import logo3 from '../assets/LogoKlientave/3.png';
import logo4 from '../assets/LogoKlientave/4.png';
import logo5 from '../assets/LogoKlientave/5.png';
import logo6 from '../assets/LogoKlientave/6.png';
import logo7 from '../assets/LogoKlientave/7.png';
import logo8 from '../assets/LogoKlientave/8.png';
import logo9 from '../assets/LogoKlientave/9.png';
import logo10 from '../assets/LogoKlientave/10.png';
import logo11 from '../assets/LogoKlientave/11.png';
import logo12 from '../assets/LogoKlientave/12.png';
import logo13 from '../assets/LogoKlientave/13.png';
import logo14 from '../assets/LogoKlientave/14.png';
import logo15 from '../assets/LogoKlientave/15.png';
import logo16 from '../assets/LogoKlientave/16.png';
import logo17 from '../assets/LogoKlientave/17.png';
import logo18 from '../assets/LogoKlientave/18.png';
import logo19 from '../assets/LogoKlientave/19.png';
import logo20 from '../assets/LogoKlientave/20.png';
import logo21 from '../assets/LogoKlientave/21.png';
import logo22 from '../assets/LogoKlientave/22.png';
import logo23 from '../assets/LogoKlientave/23.png';
import logo24 from '../assets/LogoKlientave/24.png';
import logo25 from '../assets/LogoKlientave/25.png';
import logo26 from '../assets/LogoKlientave/26.png';
import logo27 from '../assets/LogoKlientave/27.png';
import logo28 from '../assets/LogoKlientave/28.png';
import logo29 from '../assets/LogoKlientave/29.png';
import logo30 from '../assets/LogoKlientave/30.png';
import logo31 from '../assets/LogoKlientave/31.png';
import logo32 from '../assets/LogoKlientave/32.png';
import logo33 from '../assets/LogoKlientave/33.png';
import logo34 from '../assets/LogoKlientave/34.png';
import logo35 from '../assets/LogoKlientave/35.png';
import logo36 from '../assets/LogoKlientave/36.png';
import logo37 from '../assets/LogoKlientave/37.png';
import logo38 from '../assets/LogoKlientave/38.png';
import logo39 from '../assets/LogoKlientave/39.png';
import logo40 from '../assets/LogoKlientave/40.png';
import '../styles/CompanySlider.css'; // Import the CSS

const images = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15,
  logo16, logo17, logo18, logo19, logo20, logo21, logo22,
   logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30,
    logo31, logo32, logo33, logo34, logo35, logo36, logo37, logo38,
     logo39, logo40
];

const CompanySlider = () => {
  return (
    <div className="company-slider-container">
      <div className="section-title"> WE HAVE BEEN TRUSTED BY</div>
      <div className="company-slider">
        <AliceCarousel
          autoPlay
          autoPlayInterval={100}
          infinite
          disableButtonsControls
          mouseTracking
          items={images.map((image, index) => (
            <img src={image} key={index} alt={`Slide ${index}`} />
          ))}
          responsive={{
            0: { items: 1 },
            576: { items: 3 },
            1024: { items: 6 },
          }}
        />
      </div>
      <div className="section-subtitle">...and many more</div>
    </div>
  );
};

export default CompanySlider;

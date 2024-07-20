import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.css';

const servicesData = [
  { name: 'Social Media Management', description: 'Social media marketing is the use of socail media platforms and websites to promote a product or service.', link: '/social-media-management' },
  { name: 'Social Media Marketing', description: 'Drive a return on investment (ROI) from places like Facebook, Instagram and LinkedIn with socail media services from Expand.', link: '/social-media-marketing' },
  { name: 'Branding', description: 'Branding is the process of creating a strong, positive perception of a company. It\'s products or services in the customer\'s mind.', link: '/branding' },
  { name: 'Website Development', description: 'Web development is the work involved in developing a website for the internet or an intranet.', link: '/website-development' },
  { name: 'Website Re-Design', description: 'A website redesign is a high-level overhaul that involves significantly changing elements like the code.', link: '/web-re-design' },
  { name: 'E-mail Marketing', description: 'E-mail marketing is the act of sending a commercial message, typically to a group of people, using email.', link: '/e-mail-marketing' },
  { name: 'Photography & Video Production', description: 'Best Photo & Video Production Ltd, provides both SMEs and large multinationals with video and photography production services.', link: '/photo-video-production' },
  { name: 'SEO', description: 'SEO stands for "search engine optimization". In simple terms, it means the process of improving your site to increase its visibility when people search for products or services.', link: '/seo' },
  { name: 'Digital Card', description: 'NFC stands for near-field communication. It\'s a standard for devices to communicate with each other wireless.', link: '/digital-card' },
  { name: 'Outdoor Advertising', description: 'Out-of-home advertising, also called outdoor advertising, outdoor media and out-of-home media advertising.', link: '/outdoor-advertising' },
];
const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="services">
      <div className="header">
        <button className="back-button1" onClick={() => navigate('/')}>
          <span className="circle">←</span>
        </button>
      </div>
      <h1 className="services-title">Our <span >Services</span></h1>
      <div className='services-box'>{servicesData.map((service, index) => (
        <div key={index} className="service">
          <h2>{service.name}</h2>
          <button className="service-button" onClick={() => navigate(service.link)}>
            →
          </button>
          <p>{service.description}</p>
          <hr className="service-divider" />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Services;

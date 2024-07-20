import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import ServiceBoxes from './ServiceBoxes';
import ImageText from './ImageText';
import Us from './Us';
// import Slideshow from './Slideshow';
import Video from './Video';
import OrWebsites from './OrWebsites';
import VideoBackground from './VideoBackground';
import Video2 from './Video2';
import Social from './Social';
import ClientSlider from './ClientSlider';
import CompanySlider from './CompanySlider';
import LetsTalk from './LetsTalk';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <ServiceBoxes />
       <ImageText />
       <Us />
       {/* <Slideshow /> */}
       <Video />
       <OrWebsites />
       <VideoBackground />
       <Video2 />
       <Social />
       <ClientSlider />
       <CompanySlider />
       <LetsTalk />
       <Footer/>
    </div>
  );
};

export default Home;

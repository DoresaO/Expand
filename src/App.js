import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import './App.css'; // Make sure to import your global styles

// Lazy load your components
const Home = lazy(() => import('./components/Home'));
const Services = lazy(() => import('./components/Services'));
const SocialMediaManagement = lazy(() => import('./components/services/SocialMediaMenagement'));
const SocialMediaMarketing = lazy(() => import('./components/services/SocailMediaMarketing'));
const Branding = lazy(() => import('./components/services/Branding'));
const WebsiteDevelopment = lazy(() => import('./components/services/WebDev'));
const WebsiteReDesign = lazy(() => import('./components/services/WebReDesign'));
const EMailMarketing = lazy(() => import('./components/services/EmailMarketing'));
const PhotoVideoProduction = lazy(() => import('./components/services/PV'));
const SEO = lazy(() => import('./components/services/Seo'));
const DigitalCard = lazy(() => import('./components/services/DigitalCard'));
const OutdoorAdvertising = lazy(() => import('./components/services/Advertising'));
const HomeCo = lazy(() => import('./components/HomeCo'));
const Cyberoar = lazy(() => import('./components/Cyberoar'));
const RopeAccessSolutions = lazy(() => import('./components/RopeAccessSolutions'));
const NatyraResidence = lazy(() => import('./components/NatyraResidence'));
const LetsTalk = lazy(() => import('./components/LetsTalk'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/web-re-design" element={<WebsiteReDesign />} />
          <Route path="/e-mail-marketing" element={<EMailMarketing />} />
          <Route path="/photo-video-production" element={<PhotoVideoProduction />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/digital-card" element={<DigitalCard />} />
          <Route path="/outdoor-advertising" element={<OutdoorAdvertising />} />
          <Route path="/home-co" element={<HomeCo />} />
          <Route path="/cyberoar" element={<Cyberoar />} />
          <Route path="/rope-access-solutions" element={<RopeAccessSolutions />} />
          <Route path="/natyra-residence" element={<NatyraResidence />} />
          <Route path="/lets-talk" element={<LetsTalk />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

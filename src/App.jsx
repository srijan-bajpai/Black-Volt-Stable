import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import HomePage from '@/pages/HomePage';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Recruitments from '@/pages/Recruitments';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Helmet>
          <title>BLACKVOLT Technologies - AI-Powered Defense Drones for India</title>
          <meta name="description" content="BLACKVOLT Technologies develops cutting-edge AI-powered defense drones and swarm technology to strengthen India's defense capabilities. Replicating DARPA Manta Ray drone technology." />
          <meta name="keywords" content="defense drones, AI technology, swarm drones, DARPA Manta Ray, India defense, BLACKVOLT Technologies" />
          <meta property="og:title" content="BLACKVOLT Technologies - AI-Powered Defense Drones" />
          <meta property="og:description" content="Developing advanced AI-powered defense drones for India's security needs" />
          <meta property="og:type" content="website" />
        </Helmet>
        
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recruitments" element={<Recruitments />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
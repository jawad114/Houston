import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer';
import AboutUs from './pages/About';
import HealthSafety from './pages/HealthSafety';
import ContactUs from './pages/ContactUs';
import Fleet from './pages/Fleet';
import Services from './pages/Services';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const contactInfo = {
    email: 'info@example.com',
    phoneNumber: '+1234567890'
  };

  return (
    <Router>
      <div className="App">
        <Navbar brandName="Your Brand Name" imageSrcPath="/path/to/logo.png" navItems={['Home', 'About', 'Services','Fleet','Health-Safety', 'Contact']} contactInfo={contactInfo} />
        
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path='/health-safety' element={<HealthSafety />} /> 
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path='/services' element={<Services />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
  contactInfo?: {
    email: string;
    phoneNumber: string;
  };
}

const Navbar: React.FC<NavbarProps> = ({ brandName, imageSrcPath, navItems, contactInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-md p-4 relative">
      {/* Top Contact Info Bar */}
      {contactInfo && (
        <div className="bg-orange-500 w-full p-2 flex items-center justify-center md:justify-start absolute top-0 left-0 right-0 z-10">
          <div className="flex items-center text-white">
            <FaEnvelope className="mr-2" />
            <span>{contactInfo.email}</span>
          </div>
          <div className="flex items-center ml-4">
            <FaPhoneAlt className="mr-2" />
            <span>{contactInfo.phoneNumber}</span>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="mt-8 flex justify-between items-center relative z-20">
        {/* Brand Logo */}
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.jpg`} alt={brandName} className="h-12 w-60" />
        </Link>

        {/* Hamburger Menu Button for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Nav Items (Visible on larger screens) */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-700 transition-colors duration-200">
                {item }
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign In / Register Buttons (Visible on larger screens) */}
        <div className="hidden md:flex space-x-4">
          <button onClick={() => navigate('/login')} className="px-4 py-2 bg-white text-black rounded-lg hover:bg-orange-600 transition-colors duration-200">
            Sign In
          </button>
          <button onClick={() => navigate('/signup')} className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200">
            Register
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-30`}
      >
        <ul className="flex flex-col items-start space-y-4 p-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)} // Close menu when item clicked
                className="text-gray-600 hover:text-gray-700 transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-orange-600 transition-colors duration-200 w-full text-center">
              Sign In
            </button>
          </li>
          <li>
            <button onClick={() => setIsMenuOpen(false)} className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200 w-full text-center">
              Register
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay (Visible when sidebar is open) */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
        />
      )}
    </div>
  );
};

export default Navbar;

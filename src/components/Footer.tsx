import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    
    <div className="bg-white text-gray-800  relative" style={{marginTop:"-50px"}}>
        

       <div className="relative bg-orange-500 text-white p-12">

        <svg
          className="absolute top-0 left-0 w-full h-full z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C30,40 70,-40 100,0 L100,100 L0,100 Z"
            fill="black"
            opacity="0.3"
          />
        </svg>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold mb-4">For More Information</h3>
          <p className="text-lg mb-4">Or to schedule service, contact us today!</p>
          <div className="flex items-center justify-center">
            <FaPhoneAlt className="text-white text-5xl mr-4" />
            <span className="text-3xl font-bold">(888) 777-1820</span>
          </div>
        </div>
      </div>
      {/* Curvy lines */}
      <div className="absolute inset-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full"
        >
          <path
            fill="#F1F1F1"
            fillOpacity="1"
            d="M0,128L48,133.3C96,139,192,149,288,160C384,171,480,181,576,186.7C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
          ></path>
          <path
            fill="#F1F1F1"
            fillOpacity="1"
            d="M0,320L48,320C96,320,192,320,288,320C384,320,480,320,576,320C672,320,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320H1440V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
            opacity="0.3"
          ></path>
        </svg>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.jpg`}
            alt="Site Logo"
            className="mx-auto w-29 h-24 mb-4"
          />
          <p className="text-gray-500 mb-6">
            Providing exceptional services and unmatched quality. Experience the difference with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h5 className="text-orange-500 font-bold text-lg mb-4">About Us</h5>
            <p className="text-gray-600">Learn more about our company and our mission to deliver top-notch services.</p>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="text-orange-500 font-bold text-lg mb-4">Useful Links</h5>
            <ul>
              <li><a href="#services" className="text-gray-600 hover:text-gray-800">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
              <li><a href="#privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-gray-800">Terms of Service</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-orange-500 font-bold text-lg mb-4">Services</h5>
            <ul>
              <li><a href="#rentals" className="text-gray-600 hover:text-gray-800">Car Rentals</a></li>
              <li><a href="#chauffeur" className="text-gray-600 hover:text-gray-800">Chauffeur Services</a></li>
              <li><a href="#specials" className="text-gray-600 hover:text-gray-800">Special Offers</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h5 className="text-orange-500 font-bold text-lg mb-4">Subscribe</h5>
            <p className="text-gray-600 mb-4">Stay updated with our latest news and offers.</p>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-md w-full border border-gray-300 mb-2"
              />
              <button type="submit" className="bg-orange-500 text-white p-2 rounded-md w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">For more information or to schedule service, contact us today!</p>
          <div className="text-orange-500 text-3xl mt-4 flex justify-center">
            <FaPhoneAlt />
          </div>
          <p className="text-orange-500 mt-2">(888) 777-1820</p>
        </div>
        <div className="border-t-2 border-orange-500 w-72 mx-auto mb-8 mt-9"></div>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Car Rental. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

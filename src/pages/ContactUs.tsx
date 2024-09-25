import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaPhoneAlt } from 'react-icons/fa'

const ContactUs: React.FC = () => {
 

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/assets/cu.png`}
          alt="Car"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-6xl font-bold mb-4 text-center">Contact Us</h2>
          <p className="text-lg mb-6 text-center">Get a vehicle for any event and experience a safe,<br />
          pleasant trip to your destination.</p>
         
        </div>
      </div>
      <div className="text-center bg-black">
        <h1 className="text-4xl font-bold text-orange-600 mb-4 pt-6">Get In Touch</h1>
        <p className="text-gray-300 text-lg mb-4">
          We would love to hear from you! Contact us using any of the options below.
        </p>
        {/* Orange Line */}
        <div className="w-60 mx-auto border-t-2 border-orange-600 "></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-10 bg-black">
  {/* Row 1 */}
  <div className="flex flex-col items-center justify-center text-center">
    <img src={`${process.env.PUBLIC_URL}/assets/call.png`} alt="Phone Icon" className="w-32 h-32 mb-4" />
    <h3 className="text-xl font-bold text-orange-500 mb-2">Phone</h3>
    <p className="text-gray-300">Call us at +123 456 7890</p>
  </div>

  <div className="flex flex-col items-center justify-center text-center">
    <img src={`${process.env.PUBLIC_URL}/assets/email.png`} alt="Email Icon" className="w-32 h-32 mb-4" />
    <h3 className="text-xl font-bold text-orange-500 mb-2">Email</h3>
    <p className="text-gray-300">Drop us a line at support@example.com</p>
  </div>

  <div className="flex flex-col items-center justify-center text-center">
    <img src={`${process.env.PUBLIC_URL}/assets/location.png`} alt="Location Icon" className="w-32 h-32 mb-4" />
    <h3 className="text-xl font-bold text-orange-500 mb-2">Location</h3>
    <p className="text-gray-300">Visit us at 123 Example Street, City, Country.</p>
  </div>
</div>




      {/* New Container for Message Us Section */}
      <div className="bg-gray-900 p-10 pb-40  flex flex-col md:flex-row justify-between items-center">
        {/* Left: Message Us */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-3xl font-bold text-orange-500 mb-4 ml-32 pr-16">Message Us</h2>
          <p className="text-gray-300 text-start ml-32 pr-32">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>

        {/* Right: Contact Form */}
<form className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* First Row: Name and Email */}
  <div className="mb-6">
    <label className="block text-orange-500 mb-2" htmlFor="name">Name</label>
    <input
      className="w-full p-3  bg-white text-white rounded-lg"
      type="text"
      id="name"
      placeholder="Your Name"
    />
  </div>
  <div className="mb-6">
    <label className="block text-orange-500 mb-2" htmlFor="email">Email</label>
    <input
      className="w-full p-3 bg-white text-white rounded-lg"
      type="email"
      id="email"
      placeholder="Your Email"
    />
  </div>

  {/* Second Row: Phone Number and Company Name */}
  <div className="mb-6">
    <label className="block text-orange-500 mb-2" htmlFor="phone">Phone Number</label>
    <input
      className="w-full p-3 bg-white text-white rounded-lg"
      type="text"
      id="phone"
      placeholder="Your Phone Number"
    />
  </div>
  <div className="mb-6">
    <label className="block text-orange-500 mb-2" htmlFor="company">Company Name</label>
    <input
      className="w-full p-3 bg-white text-white rounded-lg"
      type="text"
      id="company"
      placeholder="Your Company Name"
    />
  </div>

  {/* Third Row: Message */}
  <div className="col-span-1 md:col-span-2 mb-6">
    <label className="block text-orange-500 mb-2 " htmlFor="message">Message</label>
    <textarea
      className="w-full p-3 bg-white text-white rounded-lg"
      id="message"
      placeholder="Your Message"
    />
  </div>

  {/* Submit Button */}
  <div className="col-span-1 md:col-span-2 flex justify-center">
    <button
      className="w-full md:w-48 px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
      type="submit"
    >
      Ask a Question
    </button>
  </div>
</form>

      </div>

      {/* Google Map Section */}
      <div className="relative h-96  bg-gray-900">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095896!2d144.95592331531536!3d-37.81720997975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774bb6cb5f1c8b!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1633022996390!5m2!1sen!2sau"
         allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

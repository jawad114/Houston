import React from 'react';
import Slider from 'react-slick';
import { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';

const AboutUs = () => {
  const upperImage = '/assets/image2.png'; // First image
  const lowerImage = '/assets/image3.png'; // Second image
  const newImage = '/assets/g59.png'; // New image with text overlay
  const bgImage = '/assets/.png'; // Background image for the new section
  const sectionImage = '/assets/section-image.png'; // New section image
  const boyImage='/assets/img66.png';
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      quote: "Exceptional service and very professional. Highly recommend!",
      name: "John Doe",
      location: "Boston Area",
      image: "person1.jpg"
    },
    {
      quote: "Exceptional service and very professional. Highly recommend!",
      name: "John Doe",
      location: "Boston Area",
      image: "person1.jpg"
    },
    {
      quote: "Exceptional service and very professional. Highly recommend!",
      name: "John Doe",
      location: "Boston Area",
      image: "person1.jpg"
    },
    {
      quote: "A wonderful experience from start to finish. Will use again!",
      name: "Jane Smith",
      location: "New York Area",
      image: "person2.jpg"
    },
    {
      quote: "Fantastic service, comfortable rides, and great value!",
      name: "Alice Johnson",
      location: "Los Angeles Area",
      image: "person3.jpg"
    },
    {
      quote: "Top-notch service with friendly drivers. Highly satisfied!",
      name: "Bob Brown",
      location: "Chicago Area",
      image: "person4.jpg"
    }
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 2) % testimonials.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-100 relative">
      {/* Hero Section */}
      <div className="relative mb-32">
        <img
          src={`${process.env.PUBLIC_URL}/assets/abscar.png`}
          alt="Car"
          className="w-full h-96  object-cover" style={{height:"500px"}}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-6xl font-bold mb-4 text-center">About Us</h2>
          <p className="text-lg mb-6 text-center">
          Get a vehicle for any event and experience a safe, <br /> pleasant trip to your destination.
          </p>
        </div>
      </div>

      {/* New Container with Two Sections */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 ml-72">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6">
          <span className="text-orange-500 font-semibold text-lg uppercase">Who We Are</span>
          <h2 className="text-6xl text-white font-bold">We are committed to excellence</h2>
          <p className="text-gray-300 text-lg ">
            With years of experience, we have been providing top-notch services
            to our clients. We pride ourselves on delivering quality and exceeding
            With years of experience, we have been providing top-notch services to our clients. We pride ourselves on delivering quality and exceeding expectations in every project. <button></button>
            expectations in every project. <br />   With years of experience, we have been providing top-notch services to our clients. We pride ourselves on delivering quality and exceeding With years of experience, we have been providing top-notch services to our clients. We pride ourselves on delivering quality and exceeding expectations in every project. expectations in every project.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* Upper Image */}
          <img
            src={upperImage}
            alt="Upper Image"
            className="w-70 h-64 object-cover rounded-lg shadow-lg absolute z-10"
          />

          {/* Lower Image */}
          <img
            src={lowerImage}
            alt="Lower Image"
            className="w-70 h-64 mt-10 px-10 object-cover rounded-lg shadow-lg absolute left-8 top-40 z-15"
          />

          {/* Small Orange Card */}
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-orange-500 text-white flex items-center justify-center text-2xl font-bold rounded-xl z-10 ml-9 mb-28 shadow-lg border-4 border-black">
            25+
          </div>
        </div>
      </div>

      {/* New Section with Full-Width Background and Overlay */}
      <div className="relative mt-60">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}></div>

        {/* Overlay Image and Text */}
        <div className="relative">
          <img
            src={newImage}
            alt="New Image"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center mx-32">
            <div className="w-full flex justify-around absolute top-1/2 transform -translate-y-1/2 px-4">
              {/* Column for Information */}
              <div className="text-center text-white">
                <h3 className="text-orange-500 text-6xl font-bold">9000</h3>
                <p className="text-lg mt-4">Happy Customers</p>
              </div>
              <div className="text-center text-white">
                <h3 className="text-orange-500 text-6xl font-bold">12</h3>
                <p className="text-lg mt-4">Luxury Limos</p>
              </div>
              <div className="text-center text-white">
                <h3 className="text-orange-500 text-6xl font-bold">900,000</h3>
                <p className="text-lg mt-4">Miles Driven</p>
              </div>
              <div className="text-center text-white">
                <h3 className="text-orange-500 text-6xl font-bold">30</h3>
                <p className="text-lg mt-4">Qualified Chauffeurs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Container with Image and Text Section */}
      <div className="container mx-auto py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 my-16 px-4">
        {/* Left Section with Image */}
        <div className="relative">
          <img
            src={boyImage}
            alt="Section Image"
            className="w-1/1 h-96 px-18 object-cover rounded-lg ml-20 shadow-lg"
          />
        </div>

        {/* Right Section with Text and Button */}
        <div className="flex flex-col justify-center space-y-6  text-white">
          <span className="text-orange-500 font-semibold text-lg uppercase">Professional Drivers</span>
          <h2 className="text-4xl font-bold">ONLY QUALIFIED CHAUFFEURS</h2>
          <p className="text-lg ">
          Houston 365 Only Qualified Chauffeurs, excellence is our driving
          force. Our handpicked, highly skilled chauffeurs redefine luxury
          travel, ensuring each journey is a seamless blend of
          professionalism and sophistication. Elevate your experience with
          the assurance that comes from choosing the best—Choose Only
          Qualified Chauffeurs.
          </p>
          <a href="#book-now" className="bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold text-lg inline-block w-max">
            Book Now
          </a>
        </div>
      </div>
      <div className="bg-black text-white p-8 w-full pb-28">
  <div className="text-center mb-6">
    <h4 className="text-orange-500 text-lg font-semibold mb-2">Reviewed by People</h4>
    <h2 className="text-4xl font-bold mb-4">Clients' Testimonials</h2>
    <p className="text-gray-300 mb-4 font-semibold">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. <br /> Pretended exquisite see cordially the you. Weeks quiet do vexed..</p>
    <div className="border-t-2 border-orange-500 w-60 mx-auto"></div>
  </div>

  <Grid container justifyContent="center" spacing={4}>
    {testimonials.slice(activeSlide, activeSlide + 2).map((testimonial, index) => (
      <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 2,
            borderRadius: 2,
            textAlign: 'center',
            color: 'white',
            minHeight: '200px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <p className="text-2xl text-black italic mb-4">"{testimonial.quote}"</p>
          <div style={{ position: 'absolute', bottom: '10px', left: '10px', display: 'flex', alignItems: 'center' }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/cardb.png`}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full "
            />
            <div style={{ marginLeft: '10px' }}>
              <h5 className="text-orange-500 font-bold">{testimonial.name}</h5>
              <p className="text-black">{testimonial.location}</p>
            </div>

            <img src={`${process.env.PUBLIC_URL}/assets/cm.png`} alt="commas" className=' h-23 w-20 ml-60 relative' />
          </div>
        </Box>
      </Grid>
    ))}
  </Grid>

  {/* Dots Navigation */}
  <div className="flex justify-center mt-6">
    {Array(Math.ceil(testimonials.length / 2))
      .fill(0)
      .map((_, dotIndex) => (
        <div
          key={dotIndex}
          className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
            activeSlide === dotIndex * 2 ? 'bg-orange-500' : 'bg-gray-500'
          }`}
          onClick={() => setActiveSlide(dotIndex * 2)}
        ></div>
      ))}
  </div>
</div>
    </div>
  );
};

export default AboutUs;
    
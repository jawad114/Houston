import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaPhoneAlt } from 'react-icons/fa';
import { Grid, Button, Box } from '@mui/material';

const HomePage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };
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
    <div className=" bg-black-100 relative flex flex-col items-center">
      <div className="relative w-full">
        <img
          src={`${process.env.PUBLIC_URL}/assets/home.png`}
          alt="Car"
          className="w-full h-96  object-cover" style={{height:"650px"}}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <p className='text-orange-500 text-xl text-center font-semibold'>Plan Your Trip Now</p>
          <h2 className="text-6xl font-bold mb-4 text-center">Professional <br /> <span  className='text-orange-600'>Chauffeured Car </span>Services</h2>
          <p className="text-lg mb-6 text-center">Get a vehicle for any event and experience a safe, <br /> pleasant trip to your destination.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
              Book Now
            </button>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
            Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-8 w-full">
        <h3 className="text-orange-500 text-xl font-semibold mb-2 text-center">Plan Your Trip Now</h3>
        <h4 className="text-3xl mb-4 text-center">Quick and Easy Car Rental</h4>
        <div className='border-t-2 border-orange-500 mt-3 w-60 mx-auto'></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-14 gap-4 mx-auto max-w-4xl">
          {['Select Car', 'Contact Operator', 'Let’s Drive'].map((car, index) => (
            <div key={index} className="text-center max-w-xs mx-auto">
              <img
                src={`${process.env.PUBLIC_URL}/assets/sm.png`}
                alt={car}
                className="ml-12 mt-5 h-auto"
              />
              <h5 className="text-2xl text-orange-500 font-bold mt-2">{car}</h5>
              <p className="text-gray-300">
                {car === 'Select Car'
                  ? 'To contribute to positive change and achieve our sustainability goals with many extraordinary'
                  : car === 'Contact Operator'
                  ? 'To contribute to positive change and achieve our sustainability goals with many extraordinary'
                  : 'To contribute to positive change and achieve our sustainability goals with many extraordinary'}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black text-white p-8 w-full">
        <h3 className="text-orange-500 text-4xl font-semibold mb-2 text-center">Professional Chauffeur Services</h3>
        <p className="text-center text-gray-300 mb-6">To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
        <div className='border-t-2 border-orange-500 mt-3 w-60 mx-auto mb-10'></div>
        <div className="flex justify-center mb-6">
          <img
            src={`${process.env.PUBLIC_URL}/assets/ch.png`}
            alt="Chauffeur Service"
            className="h-72 w-1/2 rounded"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-4xl">
  {[{
      title: '24/7 Availability', 
      description: 'Our chauffeurs are available around the clock to meet your travel needs.' 
    },
    { 
      title: 'Luxury Vehicles', 
      description: 'Our chauffeurs are available around the clock to meet your travel needs.' 
    },
    { 
      title: 'Experienced Drivers', 
      description: 'All drivers are professional, experienced, and well-trained.' 
    },
    { 
      title: 'Flexible Scheduling', 
      description: 'Schedule your rides according to your convenience.' 
    },
    { 
      title: 'Affordable Rates', 
      description: 'Enjoy premium services at competitive prices.' 
    },
    { 
      title: 'Safety First', 
      description: 'Your safety is our top priority on every ride.' 
    },
  ].map((service, index) => (
    <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md max-w-xs   mx-auto">
      <div className="flex items-start">
        <img src={`${process.env.PUBLIC_URL}/assets/car4.png`} alt={`Icon ${index + 1}`} className="w-10 h-10 mr-2" />
        <div>
          <h5 className="text-orange-500  font-bold">{service.title}</h5>
          <p className="mt-1">{service.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>


      </div>

      <div className="bg-black text-white p-5 flex flex-col sm:flex-row items-center justify-center lg:px-96 space-y-6 sm:space-y-0 sm:space-x-8 w-full">
  <div className="w-full sm:w-96 sm:h-96 flex justify-center"> {/* Center the image */}
    <img
      src={`${process.env.PUBLIC_URL}/assets/img.png`}
      alt="Special Offer"
      className="w-full h-auto rounded-lg"
    />
  </div>
  <div className="w-full sm:w-2/3 text-center sm:text-left flex flex-col items-center sm:items-start"> {/* Center text for small screens */}
    <h4 className="text-orange-500 text-lg font-semibold mb-2">About Company</h4>
    <h2 className="text-3xl font-bold mb-4">You start the engine <br /> and your adventure begins</h2>
    <p className="text-gray-300 font-semibold text-lg mb-6">
      Certain but she but shyness why cottage. Guy the put instrument sir entreaties <br />
      affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or <br />
      whose. Motionless if no to affronting imprudence no precaution. My indulged <br />
      as disposal strongly attended.
    </p>
    <div className="flex justify-center space-x-6"> 
      {["20%", "40%", "60%"].map((discount, index) => (
        <div key={index} className="text-center"> {/* Center discount text */}
          <img
            src={`${process.env.PUBLIC_URL}/assets/car4.png`}
            alt={`Icon ${index + 1}`}
            className="w-20 h-20 mb-2"
          />
          <p className="text-white text-4xl font-bold">{discount}</p>
          <p className="text-orange-600 font-semibold text-lg">Car Rental Outlets</p>
        </div>
      ))}
    </div>
  </div>
</div>




<div className="relative w-full">
  <img
    src={`${process.env.PUBLIC_URL}/assets/ccars.png`}
    alt="New Offer"
    className="w-full object-cover h-96 md:h-full" // Setting height for small screens
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col md:flex-row items-center justify-evenly px-4 md:px-8">
    <div className="text-white text-center md:text-left">
      <h3 className="text-6xl font-bold text-orange-500 mb-2">
        <span className='text-white'>Safe with</span>  <br />
        Professional Chauffeured <span className='text-white'>Car  <br />Services</span>
      </h3>
      <p className="text-lg">Book your ride and get amazing discounts today!</p>
    </div>
    <button className="bg-orange-500 text-white text-lg font-bold px-6 py-4 rounded-lg hover:bg-orange-600 transition duration-300 mt-4 md:mt-0">
      Book Now
    </button>
  </div>
</div>



      <div className="relative bg-cover bg-center bg-no-repeat p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 w-full hidden md:flex" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/tyre.jpg)` }}>
  <div className="w-full md:w-1/2 flex flex-col items-center text-left">
    <h4 className="text-orange-500 text-xl font-semibold mb-2">Our Advantage</h4>
    <h2 className="text-4xl text-white font-bold mb-6 ml-64">WE DELIVER ONLY THE <br />BEST SERVICE</h2>
    <div className="space-y-4 w-full h-full ml-28">
      {[
        { icon: 'car4.png', title: 'Individual approach​' },
        { icon: 'car4.png', title: 'Comfort & Safety' },
        { icon: 'car4.png', title: 'Professional drivers' }
      ].map((item, index) => (
        <div key={index} className="flex ml-80">
          <img src={`${process.env.PUBLIC_URL}/assets/${item.icon}`} alt={item.title} className="w-16 h-16" />
          <p className="text-lg text-white mt-6">{item.title}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-4">
    <div>
      <h2 className="text-orange-500 text-5xl font-bold">25+</h2>
      <p className="text-white text-lg">Years of Experience</p>
    </div>
    <div>
      <h2 className="text-orange-500 text-5xl font-bold">1570+</h2>
      <p className="text-white text-lg">Satisfied Clients</p>
    </div>
  </div>
</div>


  <div className='relative bg-black justify-center w-full items-center'>
    <div className='relative'>
      <img src={`${process.env.PUBLIC_URL}/assets/open.png`} alt="Car" className='w-1/2 ml-auto items-center mt-10 mr-auto' />
    </div>
    <div className="container mx-auto py-12">
  {/* Two Columns */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    {/* First Column */}
    <div className="text-center lg:text-left ml-48">
      <p className="text-orange-600 text-lg font-semibold ">FINEST TRANSPORT</p>
      <h2 className="text-4xl font-bold mt-2 text-white">Our fleet with maximum </h2>
    </div>

    {/* Second Column with Button */}
    <div className="text-center lg:text-right mr-44">
      <button className="text-white bg-orange-600 px-6 py-3 rounded-lg ">Book Now</button>
    </div>
  </div>

  {/* Three Cards Section */}
  <div className="mt-12 flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div
               className={`bg-white rounded-lg p-10 h-full text-center transition-transform transform hover:-translate-y-2 duration-300 ${
                activeCard === 1 ? 'h-auto border-2 border-orange-300 shadow-[5px_5px_15px_rgba(255,165,0,0.5)]' : 'h-64 shadow-[0_3px_6px_rgba(0,0,0,0.1)]'
              } w-full max-w-sm`}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
      >
        <h3 className="text-2xl font-semibold mb-4">Economy Ride</h3>
        <div className="text-orange-600 text-6xl  font-bold mb-4"> $80</div>
        <img src={`${process.env.PUBLIC_URL}/assets/fleetcar.png`} alt="Car" className="w-72 h-50 mx-auto mb-4" />
        <ul className="text-left mb-4">
          <li className="flex items-center justify-center mr-11 text-sm mb-2">
            <span className="text-orange-600">✔</span> Free Wi-Fi
          </li>
          <li className="flex items-center justify-center mr-4 text-sm mb-2">
            <span className="text-orange-600">✔</span> Air Conditioning
          </li>
          <li className="flex items-center justify-center text-sm mb-2">
            <span className="text-orange-600">✔</span> Comfortable Seats
          </li>
        </ul>
        <button className="bg-orange-600 text-white px-4 py-2 rounded  mt-4">Book Now</button>
      </div>

      {/* Card 2 */}
      <div
      className={`bg-white rounded-lg p-10 h-full text-center transition-transform transform hover:-translate-y-2 duration-300 ${
        activeCard === 2 ? 'h-auto border-2 border-orange-300 shadow-[5px_5px_15px_rgba(255,165,0,0.5)]' : 'h-64 shadow-[0_3px_6px_rgba(0,0,0,0.1)]'
      } w-full max-w-sm`}
      onMouseEnter={() => setActiveCard(2)}
      onMouseLeave={() => setActiveCard(null)}
>
  <h3 className="text-2xl font-semibold mb-4">Premium Ride</h3>
  <div className="text-orange-600 text-6xl font-bold mb-4">$60</div>
  <img src={`${process.env.PUBLIC_URL}/assets/fleetsuv.png`} alt="Car" className="w-72 h-50 mx-auto mb-4" />
  <ul className="text-left mb-4">
    <li className="flex items-start justify-center mr-11 text-sm mb-2">
      <span className="text-orange-600">✔</span> Free Wi-Fi
    </li>
    <li className="flex items-start justify-center mr-4 text-sm mb-2">
      <span className="text-orange-600">✔</span> Air Conditioning
    </li>
    <li className="flex items-start justify-center text-sm mb-2">
      <span className="text-orange-600">✔</span> Comfortable Seats
    </li>
  </ul>
  <button className="bg-orange-600 text-white px-4 py-2 rounded  mt-4">Book Now</button>
</div>




      {/* Card 3 */}
      <div
              className={`bg-white rounded-lg p-10 h-full text-center transition-transform transform hover:-translate-y-2 duration-300 ${
                activeCard === 3 ? 'h-auto border-2 border-orange-300 shadow-[5px_5px_15px_rgba(255,165,0,0.5)]' : 'h-64 shadow-[0_3px_6px_rgba(0,0,0,0.1)]'
              } w-full max-w-sm`}
              onMouseEnter={() => setActiveCard(3)}
              onMouseLeave={() => setActiveCard(null)}
      >
        <h3 className="text-2xl font-semibold mb-4">Luxury Ride</h3>
        <div className="text-orange-600 text-6xl font-bold mb-4">$45</div>
        <img src={`${process.env.PUBLIC_URL}/assets/fleetpd.png`} alt="Car" className="w-72 h-50 mx-auto mb-4" />
        <ul className="text-left mb-4">
          <li className="flex items-center justify-center mr-11 text-sm mb-2">
            <span className="text-orange-600">✔</span> Free Wi-Fi
          </li>
          <li className="flex items-center justify-center mr-4 text-sm mb-2">
            <span className="text-orange-600">✔</span> Air Conditioning
          </li>
          <li className="flex items-center justify-center text-sm mb-2">
            <span className="text-orange-600">✔</span> Comfortable Seats
          </li>
        </ul>
        <button className="bg-orange-600 text-white px-4 py-2 rounded  mt-4">Book Now</button>
      </div>
    </div>
  </div>
</div>


  </div>

<div className="bg-black text-white p-8 w-full pt-20">
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



      {/* FAQs Section */}
      <div className="bg-black text-white p-12 mb-12 w-full">
        <div className="text-center mb-8">
          <h4 className="text-orange-500 text-lg font-semibold mb-2">Have Questions?</h4>
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 mb-4">Find answers to the most common questions our clients ask.</p>
          <div className="border-t-2 border-orange-500 w-24 mx-auto mb-8"></div>
        </div>

        <div className="space-y-4 mx-auto max-w-3xl">
          {[{
            question: "What types of vehicles do you offer?",
            answer: "We offer a wide range of vehicles including compact cars, SUVs, and luxury sedans to fit your needs."
          }, {
            question: "Are your drivers professionally trained?",
            answer: "Yes, all of our drivers are professionally trained and experienced to provide you with the best service."
          }, {
            question: "How do I book a ride?",
            answer: "You can book a ride through our website or by contacting our customer service team directly."
          }].map((faq, index) => (
            <div
              key={index}
              className={`cursor-pointer p-4 border border-gray-700 rounded-lg ${activeFAQ === index ? 'bg-gray-800' : 'bg-gray-700'}`}
              onClick={() => handleFAQClick(index)}
            >
              <h5 className={`text-lg font-semibold ${activeFAQ === index ? 'text-orange-500' : 'text-white'}`}>{faq.question}</h5>
              {activeFAQ === index && (
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

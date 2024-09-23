import React from 'react';
import Slider from 'react-slick';
const AboutUs = () => {
  const upperImage = '/assets/image2.png'; // First image
  const lowerImage = '/assets/image3.png'; // Second image
  const newImage = '/assets/g59.png'; // New image with text overlay
  const bgImage = '/assets/.png'; // Background image for the new section
  const sectionImage = '/assets/section-image.png'; // New section image
  const boyImage='/assets/img66.png';
  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   appendDots: (dots: any) => (
  //     <div
  //       style={{
  //         position: 'absolute',
  //         bottom: '-30px',
  //         width: '100%',
  //         textAlign: 'center',
  //       }}
  //     >
  //       <ul style={{ margin: '0px' }}>{dots}</ul>
  //     </div>
  //   ),
    // customPaging: (i: number) => (
    //   <div
    //     style={{
    //       width: '10px',
    //       height: '10px',
    //       borderRadius: '50%',
    //       backgroundColor: 'orange',
    //     }}
    //   />
    // ),
  // };

 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'orange',
        }}
      />
    ),
  }
  return (
    <div className="min-h-screen bg-black bg-opacity-100 relative">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/assets/car.jpg`}
          alt="Car"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
          <p className="text-lg mb-6 text-center">
            We offer a wide range of services to meet your needs..
          </p>
        </div>
      </div>

      {/* New Container with Two Sections */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6">
          <span className="text-orange-500 font-semibold text-sm uppercase">Who We Are</span>
          <h2 className="text-4xl text-white font-bold">We are committed to excellence</h2>
          <p className="text-gray-300 text-lg">
            With years of experience, we have been providing top-notch services
            to our clients. We pride ourselves on delivering quality and exceeding
            expectations in every project.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* Upper Image */}
          <img
            src={upperImage}
            alt="Upper Image"
            className="w-70 h-64 object-cover rounded-lg shadow-lg"
          />

          {/* Lower Image */}
          <img
            src={lowerImage}
            alt="Lower Image"
            className="w-70 h-64 mt-10 px-10 object-cover rounded-lg shadow-lg absolute left-8 top-40 z-0"
          />

          {/* Small Orange Card */}
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-orange-500 text-white flex items-center justify-center text-2xl font-bold rounded-lg z-10 shadow-lg">
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
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full flex justify-around absolute top-1/2 transform -translate-y-1/2 px-4">
              {/* Column for Information */}
              <div className="text-center text-white">
                <h3 className="text-orange-500 text-4xl font-bold">9000</h3>
                <p className="text-lg">Happy Customers</p>
              </div>
              <div className="text-center text-white">
                <h3 className="text-orange-500 text-4xl font-bold">12</h3>
                <p className="text-lg">Luxury Limos</p>
              </div>
              <div className="text-center text-white">
                <h3 className="text-orange-500 text-4xl font-bold">900,000</h3>
                <p className="text-lg">Miles Driven</p>
              </div>
              <div className="text-center text-white">
                <h3 className="text-orange-500 text-4xl font-bold">30</h3>
                <p className="text-lg">Qualified Chauffeurs</p>
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
            className="w-66 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section with Text and Button */}
        <div className="flex flex-col justify-center space-y-6 text-white">
          <span className="text-orange-500 font-semibold text-sm uppercase">Get Started</span>
          <h2 className="text-4xl font-bold">Experience Our Services</h2>
          <p className="text-lg">
            Discover the range of premium services we offer. Our team is dedicated to providing the best experience possible. From luxury transport to reliable service, we ensure top-notch quality.
          </p>
          <a href="#book-now" className="bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold text-lg inline-block w-max">
            Book Now
          </a>
        </div>
      </div>

      <Slider {...sliderSettings} className="mt-8">
  {[{
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
  ].map((testimonial, index) => (
    <div key={index} className="px-4 mb-24"> {/* Add px-4 to create horizontal space */}
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg py-12 relative">
        <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
        <div className="absolute bottom-4 left-4 flex items-center space-x-3">
          <img
            src={`${process.env.PUBLIC_URL}/assets/boy.jfif`}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full border-2 border-orange-500"
          />
          <div>
            <h5 className="text-orange-500 font-bold">{testimonial.name}</h5>
            <p className="text-gray-400">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>

      {/* <div className="bg-black text-white mb-20 px-56 mt-0  p-8">
        <div className="text-center mb-6">
          <h4 className="text-orange-500 text-lg font-semibold mb-2">What Our Clients Say</h4>
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-300 mb-4">Read what our happy customers have to say about our services.</p>
          <div className="border-t-2 border-orange-500 w-24 mx-auto"></div>
        </div>

        <Slider {...sliderSettings} className="mt-8 flex justify-center gap-4 ">
          {[{
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
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg py-12 relative">
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/boy.jfif`}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-orange-500"
                />
                <div>
                  <h5 className="text-orange-500 font-bold">{testimonial.name}</h5>
                  <p className="text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default AboutUs;
    
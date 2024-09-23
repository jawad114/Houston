import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaPhoneAlt } from 'react-icons/fa'

const HomePage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
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
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/assets/car.jpg`}
          alt="Car"
          className="w-full h-80 object-cover" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Welcome to Our Services</h2>
          <p className="text-lg mb-6 text-center">We offer a wide range of services to meet your needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
              Learn More
            </button>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-8">
        <h3 className="text-orange-500 text-xl font-semibold mb-2 text-center">Plan Your Trip Now</h3>
        <h4 className="text-lg mb-4 text-center">Quick and Easy Car Rental</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {['Compact Car', 'SUV', 'Luxury Sedan'].map((car, index) => (
            <div key={index} className="text-center max-w-xs mx-auto">
              <img
                src={`${process.env.PUBLIC_URL}/assets/sm.png`}
                alt={car}
                className="w-full h-auto"
              />
              <h5 className="text-orange-500 font-bold mt-2">{car}</h5>
              <p className="text-gray-300">
                {car === 'Compact Car'
                  ? 'Perfect for city driving and easy parking.'
                  : car === 'SUV'
                  ? 'Spacious and comfortable for family trips.'
                  : 'Experience comfort and style on the road.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black text-white p-8">
        <h3 className="text-orange-500 text-xl font-semibold mb-2 text-center">Professional Chauffeur Services</h3>
        <p className="text-center text-gray-300 mb-6">Experience the best in luxury and convenience with our professional chauffeur services.</p>
        <div className="flex justify-center mb-6">
          <img
            src={`${process.env.PUBLIC_URL}/assets/ch.png`}
            alt="Chauffeur Service"
            className="h-40 w-96   rounded"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[{
              title: '24/7 Availability', description: 'Our chauffeurs are available around the clock to meet your travel needs.' },
            { title: 'Luxury Vehicles', description: 'Travel in style with our fleet of luxury vehicles.' },
            { title: 'Experienced Drivers', description: 'All drivers are professional, experienced, and well-trained.' },
            { title: 'Flexible Scheduling', description: 'Schedule your rides according to your convenience.' },
            { title: 'Affordable Rates', description: 'Enjoy premium services at competitive prices.' },
            { title: 'Safety First', description: 'Your safety is our top priority on every ride.' },
          ].map((service, index) => (
            <div key={index} className="bg-white text-gray-800 p-4 rounded-lg shadow-md max-w-xs mx-auto">
              <div className="flex items-start">
                <img src={`${process.env.PUBLIC_URL}/assets/car4.png`} alt={`Icon ${index + 1}`} className="w-8 h-8 mr-2" />
                <h5 className="text-orange-500 font-bold">{service.title}</h5>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black text-white p-5 px-6 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="w-4/5 sm:w-1/4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img.png`}
            alt="Special Offer"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full sm:w-2/3 text-center sm:text-left">
          <h4 className="text-orange-500 text-lg font-semibold mb-2">Special Offer</h4>
          <h2 className="text-3xl font-bold mb-4">Get 50% Off on Your First Ride</h2>
          <p className="text-gray-300 mb-6">Don't miss out on our limited-time offer. Book your first ride today.</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <div className="text-center">
              <img src={`${process.env.PUBLIC_URL}/assets/car4.png`} alt="Icon 1" className="w-10 h-10 mx-auto mb-2" />
              <p className="text-white text-xl font-bold">25%</p>
            </div>
            <div className="text-center">
              <img src={`${process.env.PUBLIC_URL}/assets/car4.png`} alt="Icon 2" className="w-10 h-10 mx-auto mb-2" />
              <p className="text-white text-xl font-bold">100%</p>
            </div>
            <div className="text-center">
              <img src={`${process.env.PUBLIC_URL}/assets/car4.png`} alt="Icon 3" className="w-10 h-10 mx-auto mb-2" />
              <p className="text-white text-xl font-bold">30%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/assets/ccars.jpg`}
          alt="New Offer"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col md:flex-row items-center justify-evenly px-4 md:px-8">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl font-bold text-orange-500 mb-2">New Exciting Deal</h3>
            <p className="text-lg">Book your ride and get amazing discounts today!</p>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 mt-4 md:mt-0">
            Book Now
          </button>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center bg-no-repeat p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/tyre.jpg)`,
        }}
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-orange-500 text-lg font-semibold mb-2">Our Advantage</h4>
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <div className="space-y-4">
            {[{ icon: 'car4.png', title: 'Best Rates' },
              { icon: 'car4.png', title: 'Premium Service' },
              { icon: 'car4.png', title: 'Experienced Drivers' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start">
                <img src={`${process.env.PUBLIC_URL}/assets/${item.icon}`} alt={item.title} className="w-8 h-8 mr-4" />
                <p className="text-lg text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left space-y-4">
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

      <div className="bg-black text-white p-8">
        <div className="text-center mb-6">
          <h4 className="text-orange-500 text-lg font-semibold mb-2">What Our Clients Say</h4>
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-300 mb-4">Read what our happy customers have to say about our services.</p>
          <div className="border-t-2 border-orange-500 w-24 mx-auto"></div>
        </div>

        <Slider {...sliderSettings} className="mt-8 flex justify-center gap-4">
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
            <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mx-auto gap-6 py-12 relative" style={{ width: '250px' }}>
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
      </div>

        {/* FAQs Section */}
        <div className="bg-black text-white p-12 mb-12 px-52">
        <div className="text-center mb-8">
          <h4 className="text-orange-500 text-lg font-semibold mb-2">Have Questions?</h4>
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 mb-4">Find answers to the most common questions our clients ask.</p>
          <div className="border-t-2 border-orange-500 w-24 mx-auto mb-8"></div>
        </div>

        <div className="space-y-4">
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

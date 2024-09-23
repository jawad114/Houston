import React from 'react';
import Slider from 'react-slick';

function Fleet() {
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
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-25 relative">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/assets/fleet.png`}
          alt="Car"
          className="w-full h-80 opacity-100 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Fleet</h2>
          <p className="text-lg mb-6 text-center">
            Get a vehicle for any event and experience a safe,<br />
            pleasant trip to your destination.
          </p>
        </div>
      </div>

      <div className="pt-3 pb-4 w-full bg-slate-950 relative">
        <h2 className="text-orange-600 font-bold mb-2 text-center">Our Fleet</h2>
        <h1 className="text-3xl text-white mb-6 text-center">
          The Best Luxury Fleet Available Across the World
        </h1>
        <p className='item-center justify-center text-white text-center'>
          Below is a breakdown of the main vehicles we have on hand. <br />
          If you would like something else, contact us for more information
          and we will do all we can to help!
        </p>
      </div>

      <div className="flex flex-wrap pt-5 bg-black justify-center">
        <div className='relative bg-black'>
          <img src={`${process.env.PUBLIC_URL}/assets/fleetpd.png`} className='rounded-lg mr-40 h-60 w-96 pt-3 pb-3' />
        </div>
        <div className='relative bg-black'>
          <h1 className='text-lg font-bold text-orange-600'>Mercedez Benz</h1>
          <p className='text-sm text-white text-start'>The Mercedes-Benz S-Class has long been considered one <br />
          of the best luxury sedans on the market.</p>
          <ul className='text-sm list-disc ml-8 mt-3 text-white text-left'>
            <li>Seating Capacity: 4</li>
            <li>Fuel Type: Petrol</li>
            <li>Transmission: Automatic</li>
            <li>Engine: 2.0L</li>
          </ul>
          <button className='bg-orange-600 text-white rounded-md px-4 py-2 mt-4'>Book Now</button>
        </div>
      </div>

      <div className="flex flex-wrap pt-5 bg-black justify-center ">
      <div className='relative bg-black ml-12'>
          <h1 className='text-lg font-bold text-orange-600'>Mercedez Benz</h1>
          <p className='text-sm text-white text-start'>The Mercedes-Benz S-Class has long been considered one <br />of the best luxury sedans on the market.</p>
          <ul className='text-sm list-disc ml-8 mt-3 text-white text-left'>
            <li>Seating Capacity: 4</li>
            <li>Fuel Type: Petrol</li>
            <li>Transmission: Automatic</li>
            <li>Engine: 2.0L</li>
          </ul>
          <button className='bg-orange-600 text-white rounded-md px-4 py-2 mt-4'>Book Now</button>
        </div>
        <div className='relative bg-black'>
          <img src={`${process.env.PUBLIC_URL}/assets/fleetcar.png`} className='rounded-lg mr-40 h-60 w-96 pt-3 pb-3 ml-20' />
        </div>
      </div>

      <div className="flex flex-wrap pt-5 bg-black justify-center">
        <div className='relative bg-black'>
          <img src={`${process.env.PUBLIC_URL}/assets/fleetpd.png`} className='rounded-lg mr-40 h-60 w-96 pt-3 pb-3' />
        </div>
        <div className='relative bg-black'>
          <h1 className='text-lg font-bold text-orange-600'>Mercedez Benz</h1>
          <p className='text-sm text-white text-start'>The Mercedes-Benz S-Class has long been considered one <br />
          of the best luxury sedans on the market.</p>
          <ul className='text-sm list-disc ml-8 mt-3 text-white text-left'>
            <li>Seating Capacity: 4</li>
            <li>Fuel Type: Petrol</li>
            <li>Transmission: Automatic</li>
            <li>Engine: 2.0L</li>
          </ul>
          <button className='bg-orange-600 text-white rounded-md px-4 py-2 mt-4'>Book Now</button>
        </div>
      </div>

      <div className="flex flex-wrap pt-5 bg-black justify-center ">
      <div className='relative bg-black ml-12'>
          <h1 className='text-lg font-bold text-orange-600'>Mercedez Benz</h1>
          <p className='text-sm text-white text-start'>The Mercedes-Benz S-Class has long been considered one <br />of the best luxury sedans on the market.</p>
          <ul className='text-sm list-disc ml-8 mt-3 text-white text-left'>
            <li>Seating Capacity: 4</li>
            <li>Fuel Type: Petrol</li>
            <li>Transmission: Automatic</li>
            <li>Engine: 2.0L</li>
          </ul>
          <button className='bg-orange-600 text-white rounded-md px-4 py-2 mt-4'>Book Now</button>
        </div>
        <div className='relative bg-black'>
          <img src={`${process.env.PUBLIC_URL}/assets/fleetcar.png`} className='rounded-lg mr-40 h-60 w-96 pt-3 pb-3 ml-20' />
        </div>
      </div>
      {/* Additional vehicle sections... */}

      <div className="bg-black pb-20 text-black p-8">
  <div className="text-center mb-6">
    <h4 className="text-orange-500 text-lg font-semibold mb-2">What Our Clients Say</h4>
    <h2 className="text-3xl text-white font-bold mb-4">Testimonials</h2>
    <p className="text-white mb-4">Read what our happy customers have to say about our services.</p>
    <div className="border-t-2 border-orange-500 w-24 mx-auto"></div>
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
</div>


    </div>
  );
}

export default Fleet;

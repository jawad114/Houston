import React from 'react';
import Slider from 'react-slick';
import { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';

function Fleet() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
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
  const sliderImages = [
    `${process.env.PUBLIC_URL}/assets/fleetcar.png`,
    `${process.env.PUBLIC_URL}/assets/fleetpd.png`,
    `${process.env.PUBLIC_URL}/assets/fleetsuv.png`,
  ];

  return (
    <div className="min-h-screen bg-black bg-opacity-25 relative">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/assets/fleet.png`}
          alt="Car"
          className="w-full h-full opacity-100 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-6xl font-bold mb-4 text-center">Fleet</h2>
          <p className="text-lg mb-6 text-center">
            Get a vehicle for any event and experience a safe,<br />
            pleasant trip to your destination.
          </p>
        </div>
      </div>

      <div className="pt-10 pb-10 w-full bg-slate-950 relative ">
        <h2 className="text-orange-600 font-bold mb-2 text-center text-xl">Our Fleet</h2>
        <h1 className="text-3xl text-white mb-6 text-center">
          The Best Luxury Fleet Available Across the World
        </h1>
        <p className='item-center justify-center text-white text-center'>
          Below is a breakdown of the main vehicles we have on hand. 
          If you would like something else, contact us for more information<br />
          and we will do all we can to help!
        </p>
        <div className='border-t-2 border-orange-500 mt-3 w-52 mx-auto'></div>
      </div>

      {/* Fleet Slider Sections */}
      <div className="flex flex-wrap pt-5 bg-black justify-center">
        <div className="w-96 h-60 mb-10 lg:mr-32"> {/* Adjust for responsive */}
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="relative bg-black">
                <img
                  src={image}
                  alt={`Fleet Vehicle ${index + 1}`}
                  className=" w-96 h-60 object-cover " // Consistent width and height
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className='relative bg-black'>
          <h1 className='text-lg font-bold text-orange-600 text-center lg:text-left'>Mercedez Benz</h1>
          <p className='text-sm text-white text-center lg:text-left'>
            The Mercedes-Benz S-Class has long been considered one <br />
            of the best luxury sedans on the market.
          </p>
          <ul className='text-sm list-disc ml-8 mt-3 text-white text-left'>
            <li>Seating Capacity: 4</li>
            <li>Fuel Type: Petrol</li>
            <li>Transmission: Automatic</li>
            <li>Engine: 2.0L</li>
          </ul>
          <button className='bg-orange-600 text-white rounded-md px-4 py-2 mt-4'>Book Now</button>
        </div>
      </div>

      {/* Repeat Fleet Sections with same structure */}
      <div className="flex flex-wrap pt-5 bg-black justify-center ">
        <div className='relative bg-black lg:mr-32 mb-10'>
          <h1 className='text-lg font-bold text-orange-600 text-center lg:text-left'>Mercedez Benz</h1>
          <p className='text-sm text-white text-center lg:text-left'>
            The Mercedes-Benz S-Class has long been considered one <br />
            of the best luxury sedans on the market.
          </p>
          <ul className='text-sm list-disc ml-8 mt-3 text-white text-left'>
            <li>Seating Capacity: 4</li>
            <li>Fuel Type: Petrol</li>
            <li>Transmission: Automatic</li>
            <li>Engine: 2.0L</li>
          </ul>
          <button className='bg-orange-600 text-white rounded-md px-4 py-2 mt-4'>Book Now</button>
        </div>
        <div className="w-96 h-60"> {/* Same width and height for slider */}
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="relative bg-black">
                <img
                  src={image}
                  alt={`Fleet Vehicle ${index + 1}`}
                  className=" w-96 h-60 object-cover" // Consistent width and height
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="flex flex-wrap pt-20 bg-black justify-center">
        <div className="w-96 h-60 mb-10 lg:mr-32"> {/* Adjust for responsive */}
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="relative bg-black">
                <img
                  src={image}
                  alt={`Fleet Vehicle ${index + 1}`}
                  className=" w-96 h-60 object-cover" // Consistent width and height
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className='relative bg-black'>
          <h1 className='text-lg font-bold text-orange-600 text-center lg:text-left'>Mercedez Benz</h1>
          <p className='text-sm text-white text-center lg:text-left'>
            The Mercedes-Benz S-Class has long been considered one <br />
            of the best luxury sedans on the market.
          </p>
          <ul className='text-sm list-disc ml-8 mt-3 text-white text-left'>
            <li>Seating Capacity: 4</li>
            <li>Fuel Type: Petrol</li>
            <li>Transmission: Automatic</li>
            <li>Engine: 2.0L</li>
          </ul>
          <button className='bg-orange-600 text-white rounded-md px-4 py-2 mt-4'>Book Now</button>
        </div>
      </div>

      <div className="flex flex-wrap bg-black justify-center pt-20">
        <div className='relative bg-black lg:mr-32 mb-10'>
          <h1 className='text-lg font-bold text-orange-600 text-center lg:text-left'>Mercedez Benz</h1>
          <p className='text-sm text-white text-center lg:text-left'>
            The Mercedes-Benz S-Class has long been considered one <br />
            of the best luxury sedans on the market.
          </p>
          <ul className='text-sm list-disc ml-8 mt-3 text-white text-left'>
            <li>Seating Capacity: 4</li>
            <li>Fuel Type: Petrol</li>
            <li>Transmission: Automatic</li>
            <li>Engine: 2.0L</li>
          </ul>
          <button className='bg-orange-600 text-white rounded-md px-4 py-2 mt-4'>Book Now</button>
        </div>
        <div className="w-96 h-60 mb-32"> {/* Same width and height for slider */}
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="relative bg-black">
                <img
                  src={image}
                  alt={`Fleet Vehicle ${index + 1}`}
                  className=" w-96 h-60 object-cover" // Consistent width and height
                />
              </div>
            ))}
          </Slider>
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
}

export default Fleet;



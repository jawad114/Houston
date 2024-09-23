import React from 'react';

function Services() {
  return (
    <div className="min-h-screen bg-black bg-opacity-72 mb-16 relative">
      {/* Hero Section */}
      <div className="relative bg-black">
        <img
          src={`${process.env.PUBLIC_URL}/assets/fleet.png`}
          alt="Car"
          className="w-full h-80 opacity-100 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Services</h2>
          <p className="text-lg mb-6 text-center">
            Get a vehicle for any event and experience a safe,<br />
            pleasant trip to your destination.
          </p>
        </div>

        <div className="relative bg-black justify-center pb-10 items-center">
          <p className="text-orange-600 font-bold text-center">Our Services</p>
          <h1 className="text-white text-3xl text-center">
            Elevate Your Experience with Our Distinct Offerings
          </h1>
          <p className="text-white text-center text-sm">
            To contribute to positive change and achieve our sustainability goals with many extraordinary
          </p>
          <div className="border-t-2 border-orange-500 mt-3 w-40 mx-auto"></div>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto justify-items-center">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs">
            <img
              src={`${process.env.PUBLIC_URL}/assets/service1.png`}
              alt={`Service ${i + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl text-orange-600 font-semibold mb-2">Service {i + 1}</h3>
            <p className="text-gray-600">
              Make your special day unforgettable with our elegant and luxurious vehicles.
            </p>
          </div>
        ))}
      </div>

      {/* Professional Drivers Section */}
      <div className='bg-black pt-6 pb-6'>
        <div className='container mx-auto flex flex-col md:flex-row gap-2 items-start justify-start'>
          {/* Column for Image */}
          <div className='w-full md:w-1/3 mb-6 md:mb-0 ml-52'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/serviceboy.png`}
              className='w-full h-auto object-cover'
              alt='Service Boy'
            />
          </div>

          {/* Column for Text */}
          <div className='w-full md:w-1/2 flex flex-col items-start justify-center'>
            <p className='text-orange-600 font-bold mb-2 text-left'>Professional Drivers</p>
            <h1 className='text-white text-2xl md:text-3xl mb-4 text-left'>
              Elevate Your Experience with Our Distinct Offerings
            </h1>
            <p className='text-white text-sm md:text-base text-left'>
              Any company can drive someone from point A to point B. We pride
              ourselves on being much more than just a chauffeur service by
              hiring only the best. As a high-end chauffeur service, we offer the
              best in elegance and luxury and provide a wide assortment of
              beautiful, opulent vehicles at your disposal. Let us professionally
              handle your transportation needs. Work with the leading professionals
              of chauffeured hospitality and you’ll quickly see why we are considered
              world-class.
            </p>
          </div>
        </div>
      </div>

      <div className='relative bg-black justify-center items-center mt-5'>
        <p className='text-orange-600 text-center font-semibold'>Houston City Limo</p>
        <h1 className='text-white text-center '>+1-713-804-6600</h1>
        <p className='text-white text-center '>Professional and safe chauffeured transportation is what sets us apart.</p>
        <div className="border-t-2 border-orange-500 mt-4 w-52 mx-auto"></div>
      </div>
      
      <div className="bg-black p-8">
  <h2 className="text-center text-white text-3xl font-bold mb-6">Our Services</h2>
  <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {[{
        icon: "icon1.png", // Replace with your icon path
        title: "Service One",
        description: "Description of Service One."
      },
      {
        icon: "icon2.png", // Replace with your icon path
        title: "Service Two",
        description: "Description of Service Two."
      },
      {
        icon: "icon3.png", // Replace with your icon path
        title: "Service Three",
        description: "Description of Service Three."
      }
    ].map((service, index) => (
      <div 
        key={index} 
        className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/hsicon.png`} 
          alt={service.title} 
          className="mx-auto mb-4 w-16 h-16"
        />
        <h3 className="text-orange-600 font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    ))}
  </div>

 

</div>
{/* Book A Ride Section */}
<div className="relative bg-black w-full p-8 " style={{marginBottom:"60px"}}>
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-8">
    {/* Google Map */}
    <div className="lg:w-1/2 w-full">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095896!2d144.95592331531536!3d-37.81720997975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774bb6cb5f1c8b!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1633022996390!5m2!1sen!2sau" 
        className="ml-80 h-96 rounded-lg"
        allowFullScreen 
        loading="lazy">
      </iframe>
    </div>

    {/* Book a Ride Text */}
    <div className="lg:w-1/2 w-full text-white lg:text-left text-center space-y-4">
      <p className="text-orange-600 font-semibold">BEST PRICE</p>
      <h1 className="text-3xl font-bold">Book A Ride Now</h1>
      <p>
        Whatever your transportation needs, take our world-class chauffeuring service. 
        We offer a diverse range of executive and luxury vehicles, and transport you to your 
        destination safely, efficiently, and with unmatched professionalism. Call us and 
        book your ride now!
      </p>
    </div>
  </div>
</div>

    </div>
  );
}

export default Services;

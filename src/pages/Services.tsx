import React from 'react';

function Services() {
  return (
    <div className="min-h-screen bg-black bg-opacity-72 mb-16 relative">
      {/* Hero Section */}
      <div className="relative bg-black">
        <img
          src={`${process.env.PUBLIC_URL}/assets/abt.png`}
          alt="Car"
          className="w-full h-full opacity-100 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center mb-20 text-white bg-black bg-opacity-50 p-4 ">
          <h2 className="text-6xl font-bold mb-4 text-center">Services</h2>
          <p className="text-lg mb-6 text-center">
            Get a vehicle for any event and experience a safe,<br />
            pleasant trip to your destination.
          </p>
        </div>

        <div className="relative bg-black justify-center pb-10 mt-10 items-center">
          <p className="text-orange-600 text-xl font-bold text-center">Our Services</p>
          <h1 className="text-white text-4xl text-center">
            Elevate Your Experience with Our Distinct Offerings
          </h1>
          <p className="text-white text-center text-sm mt-5">
            To contribute to positive change and achieve our sustainability goals with many extraordinary
          </p>
          <div className="border-t-2 border-orange-500 mt-3 w-52 mx-auto"></div>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto justify-items-center">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md  w-full max-w-xs">
            <img
              src={`${process.env.PUBLIC_URL}/assets/service1.png`}
              alt={`Service ${i + 1}`}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3 className="text-2xl mt-2 ml-2 pl-4 text-orange-600 font-bold mb-2">Service {i + 1}</h3>
            <p className="text-gray-600 ml-2 mb-3 pl-4">
            Elevate Your Airport Experience with Our Premier Chauffeur Service.
            </p>
          </div>
        ))}
      </div>

      {/* Professional Drivers Section */}
      <div className='bg-black pt-6 pb-6 mt-14'>
        <div className='container mx-auto flex flex-col md:flex-row gap-2 items-start justify-start'>
          {/* Column for Image */}
          <div className='w-full md:w-1/3 mb-6 md:mb-0 ml-44'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/serviceboy.png`}
              className='w-full h-auto object-cover'
              alt='Service Boy'
            />
          </div>

          {/* Column for Text */}
          <div className='w-full md:w-1/2 flex flex-col items-start px-8 justify-center'>
            <p className='text-orange-600 font-bold mb-2 text-left text-lg'>Professional Drivers</p>
            <h1 className='text-white text-4xl md:text-3xl mb-4 text-left font-bold'>
            Chauffeur Services in Over 1200 <br />Cities Worldwide
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
            <button className='bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-28'>Contact Us</button>
          </div>
        </div>
      </div>

      <div className='relative bg-black justify-center items-center mt-16'>
        <p className='text-orange-600 text-center font-bold text-lg'>Houston City Limo</p>
        <h1 className='text-white text-center text-4xl font-bold pb-4 '>+1-713-804-6600</h1>
        <p className='text-white text-center text-lg '>Professional and safe chauffeured transportation is what sets us apart.</p>
        <div className="border-t-2 border-orange-500 mt-4 w-52 mx-auto"></div>
      </div>
      
      <div className="bg-black p-8">
  <h2 className="text-center text-white text-3xl font-bold mb-6">Our Services</h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-36">
    {[{
        icon: "icon1.png", // Replace with your icon path
        title: "Stability, Security, and Reliability",
        description: "Elevate Your Airport Experience with Our Premier Chauffeur Service.."
      },
      {
        icon: "icon2.png", // Replace with your icon path
        title: "Profficent Chauffeur Service",
        description: "Elevate Your Airport Experience with Our Premier Chauffeur Service.."
      },
      {
        icon: "icon3.png", // Replace with your icon path
        title: "Up-to-date Fleet",
        description: "Elevate Your Airport Experience with Our Premier Chauffeur Service."
      }
    ].map((service, index) => (
      <div 
        key={index} 
        className="bg-gray-100 p-9  rounded-lg shadow-lg text-center">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/hsicon.png`} 
          alt={service.title} 
          className="mx-auto mb-4 w-24 h-24"
        />
        <h3 className="text-orange-600 font-bold mb-2 text-left" style={{marginTop:"-16px"}}>{service.title}</h3>
        <p className="text-gray-600 text-left">{service.description}</p>
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
        className="ml-32 w-96  h-96 rounded-lg"
        allowFullScreen 
        loading="lazy">
      </iframe>
    </div>

    {/* Book a Ride Text */}
    <div className="lg:w-1/2 w-full text-white lg:text-left text-center mt-28 mr-80 pb-40">
  <p className="text-orange-600 font-semibold text-xl">BEST PRICE</p>
  <h1 className="text-4xl font-bold">Book A Ride Now</h1>
  <p>
    Whatever your transportation needs, take our world-class chauffeuring service. 
    We offer a diverse range of executive and luxury vehicles, and transport you to your 
    destination safely, efficiently, and with unmatched professionalism. Call us and 
    book your ride now!
  </p>

  {/* New Container for Cypress and Houston */}
  <div className="flex justify-between mt-6">
    <p className="text-orange-600 font-bold text-xl">CYPRESS</p>
    <div>
      <p className="text-orange-600 font-semibold text-xl text-right">HOUSTON</p>
      {/* Additional description below Houston */}
    
    </div>
  </div>

  {/* Description */}
  <div className="mt-4 text-left">
    <p className="text-white">
      Address: 13038 Mills Creek <br />
      Meadow Dr. Houston TX 77070
    </p>
  
    {/* Phone Number */}
    <p className="text-orange-600 text-2xl font-bold  mt-7">+1-713-804-6600</p>
  </div>
</div>


  </div>
</div>

    </div>
  );
}

export default Services;

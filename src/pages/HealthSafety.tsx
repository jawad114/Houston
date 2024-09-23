import React from 'react';

function HealthSafety() {
  return (
    <div className="min-h-screen bg-black bg-opacity-25 relative">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/assets/hs.png`}
          alt="Car"
          className="w-full h-80 opacity-100 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Health & Safety</h2>
          <p className="text-lg mb-6 text-center">
            Get a vehicle for any event and we will take care of the rest.
          </p>
        </div>
      </div>

      <div className="bg-black p-10 relative">
        <p className="text-lg font-bold mb-4 text-center text-orange-600">
          Health & Safety
        </p>
        <h1 className='text-white text-2xl font-bold mb-4 text-center' >Your Safety Always Comes First with Our <br />
        Professional Chauffeur Service</h1>
        <p className='mb-10 text-center text-white '>We believe that your ride should not only be comfortable, but as safe as possible. <br /> To ensure this, we have a variety of procedures in place to
        make sure that you and your loved ones are transported with the utmost care.</p>
        <div className="border-t-4 border-orange-600 w-52 mb-10 mx-auto"></div>
        <div className="flex flex-col md:flex-row items-start justify-start">
          {/* Left: Image Section */}
          <img
            src={`${process.env.PUBLIC_URL}/assets/hsboy.png`}
            alt="Person"
            className="w-full h-72 md:w-1/5 mb-9 px-7 ml-56  rounded-lg"
          />

          {/* Right: 2x2 Grid Section */}
          <div className="grid grid-cols-2 gap-8 ml-16 mt-5 md:mt-0">
            {/* Item 1 */}
            <div className="flex flex-col items-start text-left">
              {/* Icon */}
              <div className="mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/hsicon.png`}
                  alt="Service 1 Icon"
                  className="w-12 h-12"
                />
              </div>
              {/* Title */}
              <h4 className="text-orange-500 font-bold text-lg mb-2">Service 1</h4>
              {/* Description */}
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/hsicon.png`}
                  alt="Service 2 Icon"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-orange-500 font-bold text-lg mb-2">Service 2</h4>
              <p className="text-white text-sm">
                Praesent tincidunt, enim et fringilla elementum.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/hsicon.png`}
                  alt="Service 3 Icon"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-orange-500 font-bold text-lg mb-2">Service 3</h4>
              <p className="text-white text-sm">
                Maecenas auctor metus at dui suscipit, sit amet facilisis.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/hsicon.png`}
                  alt="Service 4 Icon"
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-orange-500 font-bold text-lg mb-2">Service 4</h4>
              <p className="text-white text-sm">
                Curabitur efficitur nisi at neque varius.
              </p>
            </div>
          </div>
        </div>
      </div>


       {/* Section 1: Our Health */}
      <div className="relative flex justify-center items-center bg-black">

      </div>

      {/* Section 2: Precautions for COVID-19 */}
      <div className="bg-black py-16">
        {/* Title */}
        <div className="text-center mb-6">
        <p className="text-lg text-orange-600">Our Health</p>
          <h2 className="text-white text-3xl font-bold">Precautions for COVID-19</h2>
          <div className="border-t-4 border-orange-600 w-24 mx-auto mt-4"></div>
        </div>

        {/* Content: Two Sections */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {/* Left: Paragraph Section */}
          <div>
            <p className="text-gray-300 mt-20 text-lg">
              During these uncertain times, we have implemented several measures to ensure the safety and health of our clients and staff. 
              Our vehicles are thoroughly cleaned and sanitized between each ride. Drivers are required to wear masks, and we provide hand 
              sanitizers for all passengers.
            </p>
          </div>

          {/* Right: Image Section */}
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/hsv.png`} // Replace with your actual image path
              alt="COVID-19 Precautions"
              className="w-1/2 ml-32 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Providing Peace of Mind */}
      <div className="bg-slate-950 py-20 border-solid ">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-orange-600 text-3xl font-bold">Providing Peace of Mind</h2>
        </div>

        {/* Description */}
        <div className="text-center px-4">
          <p className="text-white text-lg max-w-3xl mx-auto">
            We are dedicated to providing a safe and comfortable experience for all our clients. With the ongoing pandemic, 
            we have implemented strict safety protocols to ensure peace of mind during your travels. From cleaning vehicles 
            to monitoring the health of our drivers, your safety is our top priority.
          </p>
        </div>
      </div>

    </div>
  );
}

export default HealthSafety;

import React from 'react';

function HealthSafety() {
  return (
    <div className="min-h-screen bg-black bg-opacity-25 relative">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/assets/hs.png`}
          alt="Car"
          className="w-full h-full opacity-100 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 text-center">Health & Safety</h2>
          <p className="text-sm sm:text-lg mb-4 sm:mb-6 text-center">
            Get a vehicle for any event and experience a safe, <br className="hidden sm:block" />
            pleasant trip to your destination.
          </p>
        </div>
      </div>

      <div className="bg-black p-6 sm:p-10 relative">
        <p className="text-lg sm:text-2xl font-bold mb-4 text-center text-orange-600">
          Health & Safety
        </p>
        <h1 className="text-white text-2xl sm:text-4xl font-bold mb-4 text-center">
          Your Safety Always Comes First with Our <br className="hidden sm:block" />
          Professional Chauffeur Service
        </h1>
        <p className="mb-6 sm:mb-10 text-center text-white text-sm sm:text-base">
          We believe that your ride should not only be comfortable, but as safe as possible. To ensure this, we have a variety of procedures in place to <br className="hidden sm:block" />
          make sure that you and your loved ones are transported with the utmost care.
        </p>
        <div className="border-t-2 border-orange-600 w-32 sm:w-64 mb-6 sm:mb-10 mx-auto"></div>
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center">
          {/* Left: Image Section */}
          <img
            src={`${process.env.PUBLIC_URL}/assets/hsboy.png`}
            alt="Person"
            className="w-3/4 sm:w-1/5 mb-6 sm:mb-0 sm:mr-8 rounded-lg"  // Increased size for small screens
          />

          {/* Right: 2x2 Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-28">
            {/* Item 1 */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-2 sm:mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/saftey.png`}
                  alt="Service 1 Icon"
                  className="w-12 sm:w-20 h-12 sm:h-20"
                />
              </div>
              <h4 className="text-orange-500 font-bold text-base sm:text-lg mb-1 sm:mb-2">Thorough Background Checks</h4>
              <p className="text-white text-xs sm:text-sm">
                All employees, both in our office and in the field,<br className="hidden sm:block" />
                undergo extensive Federal, State, and DMV <br className="hidden sm:block" />
                background screenings before being hired.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-2 sm:mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/location.png`}
                  alt="Service 2 Icon"
                  className="w-12 sm:w-20 h-12 sm:h-20"
                />
              </div>
              <h4 className="text-orange-500 font-bold text-base sm:text-lg mb-1 sm:mb-2">GPS Tracking</h4>
              <p className="text-white text-xs sm:text-sm">
                Our live dispatchers have the ability to monitor <br className="hidden sm:block" />
                driving skills with Teluware GPS tracking and iDrive <br className="hidden sm:block" />
                cameras that are installed in all of our vehicles.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-2 sm:mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/hsCar.png`}
                  alt="Service 3 Icon"
                  className="w-12 sm:w-20 h-12 sm:h-20"
                />
              </div>
              <h4 className="text-orange-500 font-bold text-base sm:text-lg mb-1 sm:mb-2">Comprehensive Driver Testing</h4>
              <p className="text-white text-xs sm:text-sm">
                Drivers must, on top of these screenings, pass <br className="hidden sm:block" />
                pre-employment drug testing and are required to <br className="hidden sm:block" />
                complete a defensive driver training course.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-2 sm:mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/hsicon.png`}
                  alt="Service 4 Icon"
                  className="w-12 sm:w-20 h-12 sm:h-20"
                />
              </div>
              <h4 className="text-orange-500 font-bold text-base sm:text-lg mb-1 sm:mb-2">Ensuring Top-Quality Travel</h4>
              <p className="text-white text-xs sm:text-sm">
                We constantly monitor our chauffeurs' driving habits <br className="hidden sm:block" />
                and records. We store anything that sets the camera <br className="hidden sm:block" />
                off such as speed and sudden stops.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Precautions for COVID-19 */}
      <div className="bg-black py-8 sm:py-16">
        {/* Title */}
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl font-bold text-orange-600">Our Health</p>
          <h2 className="text-white text-3xl sm:text-5xl font-bold">Precautions for COVID-19</h2>
          <div className="border-t-2 border-orange-600 w-40 sm:w-60 mx-auto mt-4"></div>
        </div>

        {/* Content: Two Sections */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6">
          {/* Left: Paragraph Section */}
          <div>
            <p className="text-gray-300 text-sm sm:text-lg text-start mt-10 sm:mt-20 mx-auto sm:ml-12 sm:ml-32">
              For Houston 365 there is nothing more important than our passenger’s safety and well being. As COVID-19 continues to spread, we are making efforts to protect our passengers and <br className="hidden sm:block" />
              get to their destination safely and healthy. <br className="hidden sm:block" />
              We are taking serious measures to ensure the health and safety of our clients.
              We are disinfecting our vehicles with Electrostatics foggers, between passenger changes. Further, we have asked all our staff...
            </p>
          </div>

          {/* Right: Image Section */}
          <div className="flex justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/hsv.png`}
              alt="COVID-19 Precautions"
              className="w-3/4 sm:w-1/2 h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Providing Peace of Mind */}
      <div className="bg-slate-950 py-10 sm:py-20 border-solid">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-3">
          <h2 className="text-orange-600 text-2xl sm:text-3xl font-bold" style={{ marginTop: "-20px" }}>Providing Peace of Mind</h2>
        </div>

        {/* Description */}
        <div className="text-center px-4">
          <p className="text-white text-base sm:text-lg mb-4 sm:mb-7 max-w-2xl sm:max-w-3xl mx-auto pb-6 sm:pb-0">
            Vehicle accidents are a huge cause of injury and death every year, so why not minimize those risks when travelling by trusting your life to the most expertly trained team around?
          </p>
        </div>
      </div>
    </div>
  );
}

export default HealthSafety;

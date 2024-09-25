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
          <h2 className="text-6xl font-bold mb-4 text-center">Health & Safety</h2>
          <p className="text-lg mb-6 text-center">
          Get a vehicle for any event and experience a safe, <br />
          pleasant trip to your destination.
          </p>
        </div>
      </div>

      <div className="bg-black p-10 relative">
        <p className="text-2xl font-bold mb-4 text-center text-orange-600">
          Health & Safety
        </p>
        <h1 className='text-white text-4xl font-bold mb-4 text-center' >Your Safety Always Comes First with Our <br />
        Professional Chauffeur Service</h1>
        <p className='mb-10 text-center text-white '>
        We believe that your ride should not only be comfortable, but as safe as possible. To ensure this, we have a variety of procedures in place to <br />
        make sure that you and your loved ones are transported with the utmost care. </p>
        <div className="border-t-2 border-orange-600 w-64 mb-10 my-auto mx-auto"></div>
        <div className="flex flex-col md:flex-row items-start ml-20 justify-start">
          {/* Left: Image Section */}
          <img
            src={`${process.env.PUBLIC_URL}/assets/hsboy.png`}
            alt="Person"
            className="w-full h-full md:w-1/5 mb-9 px-7 ml-56  rounded-lg" style={{width:"24%"}}
          />

          {/* Right: 2x2 Grid Section */}
          <div className="grid grid-cols-2 gap-8 mb-28 md:mt-0">
            {/* Item 1 */}
            <div className="flex flex-col items-start text-left">
              {/* Icon */}
              <div className="mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/saftey.png`}
                  alt="Service 1 Icon"
                  className="w-20 h-20"
                />
              </div>
              {/* Title */}
              <h4 className="text-orange-500 font-bold text-lg mb-2">Thorough Background Checks</h4>
              {/* Description */}
              <p className="text-white text-sm">
              All employees, both in our office and in the field,<br />
                undergo extensive Federal, State, and DMV <br />
                background screenings before being hired.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/location.png`}
                  alt="Service 2 Icon"
                  className="w-20 h-20"
                />
              </div>
              <h4 className="text-orange-500 font-bold text-lg mb-2">GPS Tracking</h4>
              <p className="text-white text-sm">
              Our live dispatchers have the ability to monitor <br />
              driving skills with Teluware GPS tracking and iDrive <br />
              cameras that are installed in all of our vehicles.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/hsCar.png`}
                  alt="Service 3 Icon"
                  className="w-20 h-20"
                />
              </div>
              <h4 className="text-orange-500 font-bold text-lg mb-2">Comprehensive Driver Testing</h4>
              <p className="text-white text-sm">
              Drivers must, on top of these screenings, pass <br />
              pre-employment drug testing and are required to <br />
              complete a defensive driver training course.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/hsicon.png`}
                  alt="Service 4 Icon"
                  className="w-20 h-20"
                />
              </div>
              <h4 className="text-orange-500 font-bold text-lg mb-2">Ensuring Top-Quality Travel</h4>
              <p className="text-white text-sm">
              We constantly monitor our chauffeurs' driving habits <br />
              and records. We store anything that sets the camera <br />
              off such as speed and sudden stops. If a chauffeur
           
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
        <p className="text-xl font-bold text-orange-600">Our Health</p>
          <h2 className="text-white text-5xl font-bold">Precautions for COVID-19</h2>
          <div className="border-t-2 border-orange-600 w-60 mx-auto mt-4"></div>
        </div>

        {/* Content: Two Sections */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {/* Left: Paragraph Section */}
          <div>
            <p className="text-gray-300 mt-20 text-lg text-start ml-48">
            For Houston 365 there is nothing more important than our passenger’s safety and  well being. As COVID-19 continues to spread, we are making efforts to protect our  passengers and <br /> get to their destination safely and healthy. <br />
              We are taking serious measures to ensure the health and safety of our clients.
              are disinfecting our vehicles with Electrostatics foggers, between passenger
changes. Further, we have asked all our.
            </p>
          </div>

          {/* Right: Image Section */}
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/hsv.png`} // Replace with your actual image path
              alt="COVID-19 Precautions"
              className="w-1/2 ml-32 h-full object-cover  shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Providing Peace of Mind */}
      <div className="bg-slate-950 py-20 border-solid ">
        {/* Title */}
        <div className="text-center mb-3">
          <h2 className="text-orange-600 text-3xl font-bold" style={{marginTop:"-40px"}}>Providing Peace of Mind</h2>
        </div>

        {/* Description */}
        <div className="text-center px-4">
          <p className="text-white text-lg mb-7 max-w-3xl mx-auto">
          Vehicle accidents are a huge cause of injury and death every year, so why not minimize those risks when travelling by trusting your life to the most expertly trained team around?
          </p>
        </div>
      </div>

    </div>
  );
}

export default HealthSafety;

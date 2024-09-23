import React from 'react';

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">Sign Up</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account? <a href="/login" className="text-orange-500 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;

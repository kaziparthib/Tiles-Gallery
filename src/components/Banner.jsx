import React from 'react';
import bg from '../assets/background.png'
import Link from 'next/link';
const Banner = () => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[400px] h-[60vh] bg-slate-900 overflow-hidden">
      {/* Background Image - Pointing to the public folder */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover opacity-60"
        style={{ backgroundImage: `url(${bg}) `}} 
      ></div>
      
      {/* Extra dark overlay to ensure text pops */}
      <div className="absolute inset-0 z-0 bg-black opacity-30"></div> 

      {/* Banner Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          Discover Your Perfect Aesthetic
        </h1>
        
        <p className="max-w-2xl mb-8 text-lg font-medium text-gray-200 drop-shadow-md sm:text-xl md:text-2xl">
          Explore our premium collection of tiles to elevate your home, kitchen, and bathroom spaces.
        </p>
        
        <Link 
          href={"/all-tiles"} 
          className="px-8 py-4 text-lg font-bold transition-all duration-300 ease-in-out transform bg-white rounded-full text-slate-900 shadow-xl hover:bg-gray-100 hover:scale-105 active:scale-95"
        >
          Browse Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
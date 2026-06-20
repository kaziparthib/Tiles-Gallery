import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="relative flex flex-col items-center text-center">
      
        <h1 className="text-[150px] font-extrabold text-gray-200 tracking-widest md:text-[200px]">
          404
        </h1>
        
       
        <div className="absolute top-1/3 bg-indigo-600 px-3 py-1 text-sm md:text-base font-semibold rounded rotate-12 text-white shadow-lg">
          Page Not Found
        </div>
        
       
        <div className="mt-[-20px] z-10">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Oops! You haveve lost your way.
          </h2>
          <p className="mt-4 text-gray-600 max-w-md mx-auto">
            We can not seem to find the page you are looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

       
        <div className="mt-10 z-10">
          <Link 
            href={"/" }
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            Take Me Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
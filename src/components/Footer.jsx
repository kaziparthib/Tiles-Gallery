import React from 'react';
import { 
  
  LogoFacebook,
  LogoTelegram, 
  
} from '@gravity-ui/icons';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-800 font-sans">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
  
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 lg:gap-12">
          
       
          <div className="flex flex-col items-center md:items-start max-w-sm lg:max-w-md text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-4">
              {/* <Layout width={28} height={28} className="text-black" /> */}
              <span className="text-xl lg:text-2xl font-bold tracking-wide text-gray-900">
                Tiles Gallery
              </span>
            </div>
         
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Discover a curated collection of premium tiles for every space. 
              From modern minimalist designs to classic patterns, we help you find the perfect 
              foundation for your next architectural or interior design project.
            </p>
          </div>

         
          <div className="flex flex-col items-center md:items-start shrink-0 pt-4 md:pt-0">
            <span className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Connect With Us
            </span>
            <div className="flex gap-4 sm:gap-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 hover:scale-110 transition-all duration-200" 
                aria-label="Facebook"
              >
                <LogoFacebook width={24} height={24} />
              </a>
            
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black hover:scale-110 transition-all duration-200" 
                aria-label="Telegram"
              >
                <LogoTelegram width={24} height={24} />
              </a>
            </div>
          </div>

        </div>
        
      
        <div className="mt-10 lg:mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Tiles Gallery. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-sm text-gray-500">
            <a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
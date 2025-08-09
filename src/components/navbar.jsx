//navbar component which includes the logo and navigation links

import React, { useState } from 'react';

const navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    
     <header className="top-0 z-50 bg-primary shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between">
        
        <img
          src="Logo.png"
          alt="logo"
          className="w-[180px] h-auto md:w-[200px] lg:w-[226px]"
        />

        <nav className="hidden md:flex space-x-4 lg:space-x-6 text-[12px] lg:text-[14px] font-medium">
          <a href="#" className="uppercase hover:text-accent transition-colors">Services</a>
          <a href="#" className="uppercase hover:text-accent transition-colors">About Us</a>
          <a href="#" className="uppercase hover:text-accent transition-colors">Contact Us</a>
          <a href="#" className="uppercase hover:text-accent transition-colors">Careers</a>
        </nav>

        

        {/* Mobile Navigation - Hamburger menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
  {isMobileMenuOpen && (
   <div className="fixed inset-0 z-40 transition-opacity duration-300 md:hidden">
    <div className="fixed top-0 right-0 w-full h-full bg-white text-smoky-black shadow-lg transform transition-transform duration-300 ease-in-out">
      
      {/* Close button*/}
      <div className="absolute top-4 right-5">
        <button
          onClick={toggleMobileMenu}
          className="text-smoky-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* All links in one column */}
      <nav className="flex flex-col p-4 space-y-8 font-medium text-lg mt-4">
        <a href="#" className="uppercase hover:text-primary transition-colors duration-200">Home</a>
        <a href="#" className="uppercase hover:text-primary transition-colors duration-200">Services</a>
        <a href="#" className="uppercase hover:text-primary transition-colors duration-200">About Us</a>
        <a href="#" className="uppercase hover:text-primary transition-colors duration-200">Contact Us</a>
        <a href="#" className="uppercase hover:text-primary transition-colors duration-200">Careers</a>
      </nav>
    </div>
  </div>
)}

    
    </header>
  )
}

export default navbar
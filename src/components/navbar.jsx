import React from 'react'

const navbar = () => {
  return (
    //navbar component
    <header className="sticky top-0 z-50 bg-[#4F46E5] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
       
        <img src="Logo.png" alt="logo" width={226} height={50}  />

        {/* Links are capitalized as per the design requirements */}
        <nav className="hidden md:flex space-x-6 text-[14px] font-medium">
          <a href="#" className="uppercase text-white hover:text-gray-200 transition-colors duration-200">Services</a>
          <a href="#" className="uppercase text-white hover:text-gray-200 transition-colors duration-200">About Us</a>
          <a href="#" className="uppercase text-white hover:text-gray-200 transition-colors duration-200">Contact Us</a>
          <a href="#" className="uppercase text-white hover:text-gray-200 transition-colors duration-200">Careers</a>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default navbar
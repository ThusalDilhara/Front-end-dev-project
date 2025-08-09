import React from 'react'

const footer = () => {
  return (
    <footer className="bg-[#4F46E5] text-white py-12">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left">
          {/* First Column */}
          <div>
            <img src="Logo.png" alt="logo" width={226} height={50}  />
            <p className="text-sm">
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </div>
          {/* Second Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Technologies</h4>
            <ul className="space-y-2">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          {/* Third Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
       <hr className="my-8 border-white w-[630px] mx-auto" />

       
        <div className="flex flex-col md:flex-row justify-center md:justify-center items-center text-sm space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default footer
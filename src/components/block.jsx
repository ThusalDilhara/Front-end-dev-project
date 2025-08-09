// this is the block component for each content block
import React from 'react'
import Button from './Button.jsx'; 

const block = ({ title, description, imageSrc, imageAlt, reverse = false }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
     
      <div className="md:w-1/2">
        <img
          src={imageSrc}
          alt={imageAlt}
          
        />
      </div>
      
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-[#4F46E5] mb-4">
          {title}
        </h2>
  
        <p className="text-lg text-gray-600 mb-8 font-[400]">
          {description}
        </p>

        <Button text={"LEARN MORE"}/>
          
        
      </div>
    </div>
  );
};

export default block;
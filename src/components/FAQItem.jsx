import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#FAF8FF] p-6 mb-3 rounded-[7px]">
  
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          className={`text-lg font-[500] transition-colors duration-300 ${
            isOpen ? "text-[#4F46E5]" : "text-[#000000]"
          }`}
        >
          {question}
        </h3>
        <span className="text-2xl text-gray-500 transition-transform duration-300">
          {isOpen ? "-" : "+"}
        </span>
      </div>

      
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <p className="text-[#6F6C90]">{answer}</p>
      </div>
    </div>
  );
};
export default FAQItem;
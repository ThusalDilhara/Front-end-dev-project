import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      {/* Question row with click handler */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Question text */}
        <h3 className="text-lg font-semibold text-[#4C35D5]">{question}</h3>
        {/* Icon based on state */}
        <span className="text-2xl text-gray-500">
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {/* Answer content, conditionally rendered */}
      {isOpen && (
        <p className="mt-4 text-gray-600">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
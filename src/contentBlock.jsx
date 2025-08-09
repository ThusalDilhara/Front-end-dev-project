import React from 'react';
import Block from './components/block.jsx';
import webImage from './assets/image2.png';
import digitalStrategyImage from './assets/image1.png'; 

const ContentBlock = () => {
  // Data for each content block 
  const webDevBlock = {
    title: 'Web & Mobile App Development',
    description: 'Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.',
    imageSrc: webImage,
    imageAlt: 'Illustration of web and mobile app development',
  };

  const digitalStrategyBlock = {
    title: 'Digital Strategy Consulting',
    description: 'Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.',
    imageSrc: digitalStrategyImage,
    imageAlt: 'Illustration of digital strategy consulting',
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 space-y-20">
        
        <Block {...webDevBlock} />
        <Block {...digitalStrategyBlock} reverse={true} />
      </div>
    </section>
  );
};

export default ContentBlock;

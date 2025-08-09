import React from "react";
import Button from "./components/Button";
import HeroImage from "./assets/HeroImage.png";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-auto flex items-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div
        className="
          relative z-10 text-white 
          max-w-[630px] 
          px-6 sm:px-8 md:px-10 
          py-6 sm:py-8
          md:ml-16 lg:ml-20 
          mt-10 sm:mt-20 md:mt-40 lg:mt-[354px]
        "
        style={{
          background: "linear-gradient(90deg, #4DCA79 0%, #1CBDDD 100%)",
        }}
      >
        <h1
          className="
            font-bold leading-tight mb-4
            text-xl sm:text-2xl md:text-4xl lg:text-5xl
          "
        >
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>

       
        <Button text={"GET FREE CONSULTATION"} />
      </div>
    </section>
  );
};

export default Hero;

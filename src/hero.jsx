import React from "react";
import Button from "./components/Button";
import HeroImage from "./assets/HeroImage.png";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center flex flex-col lg:flex-row items-center justify-center lg:items-end lg:justify-start"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >

      {/* Mobile view: image is a separate block */}
      <div className="w-full h-auto lg:hidden">
         <img src={HeroImage} alt="Hero Background" className="w-full h-auto" />
      </div>

       <div
        className="relative z-10 w-full lg:max-w-2xl px-4 py-8 md:px-8 md:py-8 md:mb-10 lg:ml-20 rounded-none lg:rounded-lg lg:rounded-b-none lg:rounded-t-lg lg:mt-[354px]"
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

import React from 'react'
import Button from './components/Button'  
import HeroImage from './assets/HeroImage.png'

const hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-[100vh] flex items-center" 
      style={{ backgroundImage: `url(${HeroImage})`}}
    >
      <div
        className="relative z-10 text-white rounded-lg max-w-[630px] pt-6 px-10 pb-8 ml-20 mt-[354px]"
        style={{
          background: 'linear-gradient(90deg, #4DCA79 0%, #1CBDDD 100%)',
          opacity: 1,
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        {/* Reusable Button component */}
        <Button text={"GET FREE CONSULTATION"} />
      </div>
    </section>
  )
}

export default hero
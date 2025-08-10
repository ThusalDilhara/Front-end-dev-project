// footer component 

const footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-16 lg:gap-x-32 text-left">
          {/* First Column */}
          <div>
            <div className="flex justify-start">         
               <img src="Logo.png" alt="logo" className="h-[50px] w-auto" />
               </div> 
            <p className="text-sm font-medium mt-4">
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </div>
          {/* Second Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Technologies</h4>
            <ul className="space-y-2 font-medium">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          {/* Third Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 font-medium">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li> 
            </ul>
          </div>
        </div>

        {/* Separator line */}
       <hr className="my-8 border-white w-full max-w-2xl mx-auto" />

       
        <div className="flex flex-row justify-center items-center text-sm gap-2 md:gap-0 md:space-x-4">
          <a href="#" className="hover:text-accent">Privacy Policy</a>
          <span className="inline">|</span>
          <a href="#" className="hover:text-accent">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default footer
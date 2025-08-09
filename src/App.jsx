import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Hero from './hero.jsx'
import ContentBlock from './contentBlock.jsx'
import FAQSection from './FAQSection.jsx'



function App() {
  return (
     <div className="min-h-screen flex flex-col text-white">
      <Navbar />
      
      
      <main className="flex-grow bg-white mb-16">
        <Hero />
        <ContentBlock />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  )
  
}



export default App

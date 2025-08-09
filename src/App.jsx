import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Hero from './hero.jsx'
import ContentBlock from './contentBlock.jsx'



function App() {
  return (
     <div className="min-h-screen flex flex-col">
      <Navbar />
      
      
      <main className="flex-grow bg-gray-100 mb-16">
        <Hero />
        <ContentBlock />
      </main>
      
      <Footer />
    </div>
  )
  
}



export default App

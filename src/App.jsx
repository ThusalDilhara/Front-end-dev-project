import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Hero from './hero.jsx'



function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gray-100'>
        <Hero/>
      </div>
      <Footer/>
    </>
  )
}



export default App

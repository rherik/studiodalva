import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Homepage from './Components/Homepage/Homepage'

export default function App () {
  return (
    <>
    <div className='h-screen bg-white'>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
    </>
  )
}

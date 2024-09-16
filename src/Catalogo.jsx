import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Catalogo from './Components/Catalogo/Catalogo'

const App = () => {
  return (
    <>
    <div className='h-screen pt-14 bg-white'>
      <Navbar />
      <Catalogo />
      <Footer />
    </div>
    </>
  )
}

export default App
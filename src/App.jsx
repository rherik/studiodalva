import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Cadastro from './Components/Cadastro/Cadastro'

const App = () => {
  return (
    <>
    <div className='h-screen pt-14 space-y-20 bg-white'>
      <Navbar />
      <Cadastro />
      <Footer />
    </div>
    </>
  )
}

export default App
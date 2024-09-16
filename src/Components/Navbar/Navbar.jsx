import React from 'react'
import logo from "../../assets/d_logo.png"

const Navbar = () => {
  return (
    <div>
        <header className="header absolute top-0 left-0 w-full px-10 py-5 bg-white flex justify-between items-center z-[100]">
            <div className='w-96 h-16'>
              <img src={logo} alt="" className='w-24 rounded-lg'/>
              </div>
            <a href="" className="logo"></a>

            <nav className="navbar flex">
                <a href="/" className='relative text-[18px] text-[#cba042] font-medium ml-10 hover:text-[#6e7975]'>Home</a>
                <a href="https://wa.me/5521977696402" className='relative text-[18px] text-[#cba042] font-medium ml-10 hover:text-[#6e7975]'>Agende sua avaliação</a>
                <a href="/catalogo" className='relative text-[18px] text-[#cba042] font-medium ml-10 hover:text-[#6e7975]'>Catálogo</a>
                <a href="/#" className='relative text-[18px] text-[#cba042] font-medium ml-10 hover:text-[#6e7975]'>Como chegar</a>
                <a href="/#" className='relative text-[18px] text-[#cba042] font-medium ml-10 hover:text-[#6e7975]'>Termos</a>
                <a href="/#" className='relative text-[18px] text-[#cba042] font-medium ml-10 hover:text-[#6e7975]'>Sobre</a>
            </nav>
        </header>
    </div> 
  )
}

export default Navbar
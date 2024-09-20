import React, { useState } from 'react';
import { HiMiniBars3, HiMiniXMark } from 'react-icons/hi2';
import logo from "../../assets/d_logo.png";

const Navbar = () => {
  let links = [
    {name: 'Home', link: '/'},
    {name: 'Agende sua avaliação', link: 'https://wa.me/5521977696402'},
    {name: 'Catalogo', link: '/catalogo'},
    {name: 'Como chegar', link: '#'},
    {name: 'Termos', link: '#'},
    {name: 'Sobre', link: '#'}
  ];
  const [open, setOpen] = useState(false);
  const handleButton = () => {
    setOpen(open => !open)
  }
  return (
    <div>
        <header className="header absolute top-0 left-0 w-full px-10 py-4 bg-white flex items-center justify-between z-[100] shadow-md">
            <div className='w-55 h-16'>
              <a href="/" className="logo">
                <img src={logo} alt="" className='w-24 rounded-lg'/>
              </a>
            </div>
            
            <div onClick={handleButton} 
            className='text-2xl absolute transition-transform duration-700 right-8 top cursor-pointer md:hidden'>
              {open ? <HiMiniXMark />: <HiMiniBars3 />}
            </div>

            <ul className={`pb-12 absolute bg-white z-[-1] left-0 w-full pl-9 transition-all duration-400 ease-in ${open ? 'top-20': 'top-[-490px]'}
              md:static md:flex md:items-center md:pb-0 md:z-auto md:w-auto md:pl-0`}>
              {
              links.map((link)=>(
                <li className='md:ml-8 md:my-0 my-7'>
                  <a 
                  className='text-[16px] text-[#cba042] font-medium hover:text-[#6e7975]' 
                  href={link.link}>{link.name}</a>
                </li>
              ))
            }
            </ul>
        </header>
    </div> 
  )
}

export default Navbar
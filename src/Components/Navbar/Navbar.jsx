import React, { useState } from 'react';
import { HiMiniBars3, HiMiniXMark } from 'react-icons/hi2';
import logo from "../../assets/d_logo.png";
import { Link } from 'react-scroll'

export default function Navbar () {
  let links = [
    {name: 'Home', link: '/', id: 'home', internal: true},
    {name: 'Catalogo', link: '/catalogo', id: 'catalogo', internal: true},
    {name: 'Como chegar', link: '#', internal: false},
    {name: 'Termos', link: '#', internal: false},
    {name: 'Sobre', link: '#', internal: false}
  ];
  const [open, setOpen] = useState(false);
  const handleButton = () => {
    setOpen(open => !open)
  }
  return (
    <div>
        <header className="fixed top-0 left-0 w-full px-10 py-4 bg-white flex items-center justify-between z-[100] shadow-md">
            <div className='w-55 h-16'>
              <a href="/" className="logo">
                <img src={logo} alt="" className='w-24 rounded-lg'/>
              </a>
            </div>
            
            <div onClick={handleButton} 
            className='text-2xl absolute transition-transform duration-700 right-8 top cursor-pointer md:hidden'>
              {open ? <HiMiniXMark />: <HiMiniBars3 />}
            </div>

            <ul className={`bg-white absolute z-[-1] right-0 pl-4 h-fit w-full transition-all duration-400 ease-in ${open ? 'top-20': 'top-[-490px]'}
              md:static md:flex md:items-center md:pb-0 md:w-fit md:h-fit md:pr-0`}>
              {
              links.map((link)=>(
                <li className='md:ml-8 md:my-0 my-6' key={link.id}>
                  {link.internal ? (
                    <Link
                    className='text-[16px] text-[#cba042] font-medium hover:text-[#6e7975]' 
                    href=''
                    to={link.id}
                    target={link.target}
                    type={link.type}
                    rel={link.rel}  
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleButton}
                    >
                      {link.name}
                    </Link>
                  ):(
                    <a href={link.link}
                    className='text-[16px] text-[#cba042] font-medium hover:text-[#6e7975]'
                    target={link.target}
                    type={link.type}
                    rel={link.rel}
                    onClick={handleButton}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))
            }
            </ul>
        </header>
    </div> 
  )
}

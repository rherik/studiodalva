import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
        {/* Colocar redes sociais e ícones
        endereço com google maps: https://www.google.com/maps/place/R.+Pedro+Gomes,+21+-+Realengo,+Rio+de+Janeiro+-+RJ,+21715-050/data=!4m2!3m1!1s0x9bdf65038b255b:0x205671290844094f?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNy4xMDMYACCenQoqYyw5NDIyNjk2OSw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIzMTE3NCw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQlI%3D */}
        <div className='bg-white text-gray-400 relative inset-x-0 bottom-0 border-double border-2 border-gray-500'>
            <div className='flex justify-between items-center'>
                <div className='grid pt-5 p-4'>
                    <p className='font-bold'>Rua Pedro Gomes, 21. Realengo. Rio de janeiro/RJ</p>
                    <div className='flex flex-row space-x-1'>
                        <a href="mailto:dalvacamposestetica@gmail.com" target='_blank' className='hover:text-white cursor-pointer'>
                        <MdEmail className='mt-1 text-xl' /></a>
                        <p>dalvacamposestetica@gmail.com</p>
                    </div>
                    <div className='text-[22px] hover:text-white cursor-pointer'>
                    <a href='https://www.instagram.com/studio.dalvacampos?igsh=ZDl4cDV1Z3BoenYw' target='_blank'>
                        <FaInstagram />
                    </a>
                </div>

                </div>

                <form action="">
                    <div className='flex justify-end p-4 space-x-2'>
                        <input type="text" placeholder='Digite seu e-mail' className="flex row-span-3 p-2 bg-[#6e7975] text-gray-900 border border-gray-300 rounded-lg
                        focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400
                        dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        
                        <button className="rounded-lg bg-[#cba042] font-sans text-sm 
                        uppercase text-black shadow-gray-900/10 transition-all hover:shadow-lg
                        hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none 
                        disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Me inscrever
                        </button>
                    </div>
                </form>
        </div>
            
            <div className="max-x-[1240px] mx-auto border-t-4 border-white py-8
            sm:flex-row text-center divide-y-2">
                <h6 className='absolute right-4 font-bold upercase'>
                © 2024 <a href='https://www.github/rherik.com' target='_blank'>rHerik</a>. Todos os direitos reservados.
                </h6>
            </div>
        </div>
        </>
    )
}
export default Footer
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { 
        APIProvider,
        Map,
        AdvancedMarker,
        Pin
 } from '@vis.gl/react-google-maps';

const Footer = () => {
    const position = {lat: -22.88414, lng: -43.43556};

    return (
        <>
        {/* Colocar redes sociais e ícones
        endereço com google maps: https://www.google.com/maps/place/R.+Pedro+Gomes,+21+-+Realengo,+Rio+de+Janeiro+-+RJ,+21715-050/data=!4m2!3m1!1s0x9bdf65038b255b:0x205671290844094f?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjEzNy4xMDMYACCenQoqYyw5NDIyNjk2OSw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIzMTE3NCw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICQlI%3D */}
        <div className='bg-white text-gray-400 relative w-86 pt-3 p-2 inset-x-0 bottom-0 border-double border-2 shadow-md
            md:grid md:grid-cols-2 md:justify-between md:w-full'>

            <div className='flex flex-col w-fit h-fit'>
                <div className='h-32 w-80 md:h-36 md:w-96 rounded-lg'>
                    <APIProvider apiKey={import.meta.env.VITE_MAPSKEY}>
                        <Map 
                        zoom={12} 
                        center={position}
                        mapId={import.meta.env.VITE_MAPID}
                        >                          
                        <AdvancedMarker position={position}>
                            <Pin />
                        </AdvancedMarker> 
                        </Map>
                    </APIProvider>
                </div>
                    <p className='font-bold'>Rua Pedro Gomes, 21. Realengo. Rio de janeiro/RJ</p>
                </div>
            
                <div className='md:pl-80 w-fit'>
                    <div className='flex flex-row'>
                        <a href="mailto:dalvacamposestetica@gmail.com" target='_blank' className='hover:text-white cursor-pointer'>
                            <MdEmail className='mt-1 text-xl hover:text-[#cba042]' /></a>
                        <p>dalvacamposestetica@gmail.com</p>
                    </div>
                    <div className='w-fit text-[22px] hover:text-[#cba042] cursor-pointer'>
                        <a href='https://www.instagram.com/studio.dalvacampos?igsh=ZDl4cDV1Z3BoenYw' target='_blank'>
                            <FaInstagram />
                        </a>
                    </div>
                    <div className='flex items-end pt-1 pr-0 space-x-2'>
                        <input type="text" placeholder='Digite seu e-mail' className="flex row-span-3 p-2 bg-[#6e7975] text-gray-900 border border-gray-300 rounded-lg
                        focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400
                        dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        
                        <button className="relative rounded-lg bg-[#cba042] font-sans text-[14px] 
                        text-gray-900 transition-all hover:shadow-lg
                        hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none 
                        disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            <p className='uppercase p-2'>Me inscrever</p>
                        </button>
                    </div>
                    <div className="flex md:pt-16">
                        <h6 className='font-bold upercase'>
                            © 2024 <a href='https://www.instagram.com/_hliki/' target='_blank'>Hliki</a>. Todos os direitos reservados.
                        </h6>
                    </div>

                </div>            
        </div>
        </>
    )
}
export default Footer
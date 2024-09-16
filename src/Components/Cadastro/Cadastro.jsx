import React from 'react'
import Aimagem from '../../assets/dc_logo.png'

function Cadastro() {
  return (
    <main className='flex flex-col-2 justify-around bg-black static p-2'>
      <div className='h-[880px] w-[479px]'>
          <img src={Aimagem} alt="" />
      </div>

      <aside className='w-72 static py-4 space-y-4'>
        <div className='flex flex-row space-x-2 text-3xl'>
          <p className='text-white'>Finalizar</p> 
          <p className='font-bold text-green-500'>Compra</p>
        </div>
        <div className="block w-full p-2 bg-black text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
            <p>Quantidade: {}</p>
            <p>Preço: {}</p>
        </div>
        <form className='max-w-sm mx-aut' action="">
          <div className="mb-5">
            <input type="text" placeholder='Nome'
            className="block w-full p-4 bg-black text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
          </div>
          <div className="mb-5">
            <input type="text" placeholder='CPF'
            className="block w-full p-4 bg-black text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
          </div>
          <div className="mb-5">
            <input type="text" placeholder='E-mail'
            className="block w-full p-4 bg-black text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
          </div>
          <div className="mb-5">
            <input type="text" placeholder='WhatsApp'
            className="block w-full p-4 bg-black text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
          </div>
          <button
            class="select-none rounded-lg bg-green-500 py-3 w-full text-center align-middle font-sans text-xs font-bold uppercase
             text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] 
             focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Finalizar compra
          </button>
          <button
            class="select-none rounded-lg border border-gray-900 py-3 w-full text-center align-middle font-sans text-xs font-bold uppercase text-green-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Cancelar
          </button>
        </form>
      </aside>
    </main>
  )
}

export default Cadastro
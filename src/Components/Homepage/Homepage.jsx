import Aimagem from '../../assets/dc_logo.png'
import Catalogo from '../Catalogo/Catalogo'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import me1 from '../../assets/dalva.jpg'

export default function Homepage() {

  return (
    <main className=''>
      <div className='flex flex-row justify-around bg-white static pt-40 p-2 w-full left-2' id='home'>
          <img src={Aimagem} alt="" className='w-[400px]' />
      </div>

      <FloatingWhatsApp 
      phoneNumber='5521977696402' 
      accountName='Dalva Campos'
      chatMessage='Olá, Como posso te ajudar?'
      allowClickAway
      statusMessage='Resposta em até uma hora'
      notificationSound
      avatar={me1}
      />
      <Catalogo />
    </main>
  )
}

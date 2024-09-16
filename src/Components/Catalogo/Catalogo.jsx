import cera from '../../assets/serv/cera.jpeg'
import hidraglos from '../../assets/serv/hidraglos.jpeg'
import drenagem from '../../assets/serv/drenagem.jpeg'
import limp_pele from '../../assets/serv/limp_pele.jpeg'
import remo_sinais from '../../assets/serv/remo_sinais.jpeg'
import spa_pes from '../../assets/serv/spa_pes.jpeg'
import massagem from '../../assets/serv/massagem.jpeg'
import micro_agulha from '../../assets/serv/micro_agulha.jpeg'

function Catalogo() {

  return (
    <section className='grid grid-cols-2 justify-center static p-2 pl-2'>
      <div className='h-[880px] w-[479px] shadow-xl pt-2'>
          <img src={cera} alt="" />
      </div>
      <div className='h-[880px] w-[479px] shadow-xl pt-2'>
          <img src={hidraglos} alt="" />
      </div>
      <div className='h-[880px] w-[479px] shadow-xl pt-2'>
          <img src={drenagem} alt="" />
      </div>
      <div className='h-[880px] w-[479px] shadow-xl pt-2'>
          <img src={limp_pele} alt="" />
      </div>
      <div className='h-[880px] w-[479px] shadow-xl pt-2'>
          <img src={remo_sinais} alt="" />
      </div>
      <div className='h-[880px] w-[479px] shadow-xl pt-2'>
          <img src={spa_pes} alt="" />
      </div>
      <div className='h-[880px] w-[479px] shadow-xl pt-2'>
          <img src={massagem} alt="" />
      </div>
      <div className='h-[880px] w-[479px] shadow-xl pt-2'>
          <img src={micro_agulha} alt="" />
      </div>
    </section>
  )
}

export default Catalogo
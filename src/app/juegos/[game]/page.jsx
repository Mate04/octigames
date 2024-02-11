
  // Hacer algo con el path
  
import Categoria from '@/components/categorit'
import logo from '../../../../public/WhatsApp Image 2024-02-04 at 16.11.28_e551de90.jpg'//public\WhatsApp Image 2024-02-04 at 16.11.28_e551de90.jpg
import '../../../style/game.css'
import '../../../style/gampley.css'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/components/banner'
export default function page() {
  
  return (
    <>
    <div className='container'>
      <div className="cuadrado rectangulo1">
        <div className='home'><Link href={'/'} className='link-qsy'><Image src={logo} alt='s' className='imagen'/></Link></div>
        <div className='add-left'>
          <Banner height={300} width={160}/>
        </div>
      </div>
      <div id="rectangulo2" className="cuadrado contenidoJuego">
      <iframe src="https://html5.gamedistribution.com/f7364610976f43d1b31f730d9995641a/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" width="800" height="600" scrolling="none" frameborder="0"></iframe>
      </div>
      <div id="rectangulo3" className="cuadrado rectangulo3">
      <Banner height={600} width={160}/>
      </div>
    </div>
    <Categoria />
    </>
  )
}

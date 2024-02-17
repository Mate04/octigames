"use client"

function page() {
  return (
    <div>page</div>
  )
}

export default page
/*
import { useSearchParams } from 'next/navigation'
import logo from '../../../public/WhatsApp Image 2024-02-04 at 16.11.28_e551de90.jpg'//public\WhatsApp Image 2024-02-04 at 16.11.28_e551de90.jpg'//'../../../public/WhatsApp Image 2024-02-04 at 16.11.28_e551de90.jpg'//public\WhatsApp Image 2024-02-04 at 16.11.28_e551de90.jpg
import '../../style/game.css'
import '../../style/gampley.css'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/components/banner'
export default function Page() {
  let info = {};
  const query = useSearchParams()
  if (typeof window !== 'undefined') {
    info = {
      Md5 : query.get('Md5'),
      Title : query.get('Title'),
      Description : query.get('Description'),
      Height : query.get('Height'),
      Width : query.get('Width'),
    }
  }




  return (
    <>
    <div className='container-games'>
      <div className="cuadrado rectangulo1">
        <div className='home'>
        <Link href={'/'} className='link-qsy'>
          <Image src={logo} alt='s' className='imagen'/>
          <div className="button-home">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
            <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
          </svg>
          </div>
        </Link>
        </div>
        <div className='add-left'>
          <Banner height={300} width={160}/>
        </div>
      </div>
      <div id="rectangulo2" className="cuadrado contenidoJuego">
        <iframe src={`https://html5.gamedistribution.com/${info.Md5}/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}`} width="800" height="600" scrolling="none" frameborder="0"></iframe>
        <div className='info'>
          <h1>{info.Title}</h1>
          
          <p>{info.Description}</p>
        </div>
      </div>
      <div id="rectangulo3" className="cuadrado rectangulo3">
      <Banner height={600} width={160}/>
      </div>
    </div>
    </>
  )
}
*/
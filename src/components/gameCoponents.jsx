"use client"
//public\WhatsApp Image 2024-02-04 at 16.11.28_e551de90.jpg'//'../../../public/WhatsApp Image 2024-02-04 at 16.11.28_e551de90.jpg'//public\WhatsApp Image 2024-02-04 at 16.11.28_e551de90.jpg
import Script from 'next/script';
import '../style/game.css'
import Image from 'next/image';
import logo from '../../public/logo.webp'
import '../style/gampley.css'
import Banner from '../components/banner';
import Link from 'next/link'
import LeftColumnView from '../components/LeftColumnView';
import { useSearchParams } from 'next/navigation'
// import Share from '@/components/share';
import CategoriaV2 from '../components/CategoriaV2';
export async function GameComponent() {
  const url = useSearchParams()
  const Md5 = url.get('Md5')
  const Title = url.get('Title')
  return (
    <>
      <div className='container-games'>
        <div className="square">
          <LeftColumnView Md5={Md5} />
        </div>
        <div className="square">
          <iframe src={`https://html5.gamemonetize.co/${Md5}/`} width="100%" height="100%" scrolling="none" frameBorder="0" style={{ borderRadius: "10px" }}></iframe>
          <div className='info'>
            <p>{Title}</p>
          </div>
        </div>
        <div id="rectangulo3" className="cuadrado rectangulo3">
          <Banner keyAD={'80bb9c56da40368cfa31e6e1e2fda85e'} height={600} width={160} />
        </div>
      </div>
      <CategoriaV2 numeroCategoria="17" nombreCategoria="Juegos para vos" />
    </>
  )
}

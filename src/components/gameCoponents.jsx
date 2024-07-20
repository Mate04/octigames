"use client"
import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import '../style/game.css'
import '../style/gampley.css'
import Banner from '../components/banner';
import LeftColumnView from '../components/LeftColumnView';
import { useSearchParams } from 'next/navigation'
import { FaClipboard } from "react-icons/fa";
import CategoriaV2 from '../components/CategoriaV2';
export async function GameComponent() {
  const [mobile, setMobile] = useState(false)
  const url = useSearchParams()
  const Md5 = url.get('Md5')
  const Title = url.get('Title')

  useEffect(() => {
    if (isMobile) {
      setMobile(true)
    }
  }, [])

  return (
    <>
      <div className='container-games'>
        {!mobile &&
          <div className="square">
            <LeftColumnView Md5={Md5} />
          </div>
        }
        <div className="square">
          <iframe src={`https://html5.gamemonetize.co/${Md5}/`} width="100%" height="100%" scrolling="none" frameBorder="0" style={{ borderRadius: "10px" }}></iframe>
          <div className='info'>
            <p>{Title}</p>
          </div>
          <button className='actions' onClick={() => navigator.clipboard.writeText(window.location.href)}><FaClipboard /> Copiar enlace de videojuego</button>
        </div>
        {!mobile ? (
          <div id="rectangulo3" className="cuadrado rectangulo3">
            <Banner keyAD={'80bb9c56da40368cfa31e6e1e2fda85e'} height={600} width={160} />
          </div>
        ) : <Banner keyAD={'6255d3c5fb923d4cc0f9a4c7fd594c5f'} width={320} height={50} />}
      </div>
      <CategoriaV2 numeroCategoria="17" nombreCategoria="Juegos para vos" />
    </>
  )
}

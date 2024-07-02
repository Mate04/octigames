"use client"
import '../style/banner.css'

import { useEffect, useRef } from 'react'
import useScript from '../hooks/useScript'
export default function Banner({ keyAD, height, width }) {
    const banner = useRef()
    useScript(keyAD, height, width, banner);

    const bannerStyle = {
        height: `${height}px`, // Añadir la altura del objeto atOptions
        width: `${width}px`// Puedes añadir más estilos aquí si lo necesitas
    }

    return <div className={'banner'} ref={banner} style={bannerStyle} ></div>
}
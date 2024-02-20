"use client"
import '../style/banner.css'

import { useEffect, useRef } from 'react'
export default function  Banner({keyAD,height,width}) {
    const banner = useRef()
    const atOptions = {
        'key': keyAD,
        'format': 'iframe',
        'height': height,
        'width': width,
        'params': {},
    }
    useEffect(() => {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    
}, [banner])

const bannerStyle = {
    height: `${atOptions.height}px`, // Añadir la altura del objeto atOptions
    width: `${atOptions.width}px`// Puedes añadir más estilos aquí si lo necesitas
}
    return <div className={'banner'} ref={banner} style={bannerStyle} ></div>
}
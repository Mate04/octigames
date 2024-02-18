"use client"
import '../style/banner.css'

import { useEffect, useRef } from 'react'
export default function  Banner({key='b1d51b21f21c7eaad3ffdee2eb230bad',height,width}) {
    if( height !== 600){
        key= 'aa77de426a721b10d576d67754a616a7'
        console.log(key);
        
    }
    const banner = useRef()
    
    
    const atOptions = {
        'key': key,
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
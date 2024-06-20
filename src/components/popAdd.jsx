'use client'
import { useState, useEffect } from 'react'
import Banner from './banner'
import '../style/popAdd.css'

export default function PopAdd() {
  const [isVisible, setIsVisible] = useState(false); // Cambiado a false para que el componente no se inicie inmediatamente

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // 15000 ms son 15 segundos
    return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
  }, []);

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className={`OcuparPantallaNegro ${isVisible ? '' : 'DisplayNone'}`}
      onClick={handleClick}>

      <Banner className='children' keyAD={"fdd03379505c73182b7fc6200a615c2b"} height={250} width={300} />
      <div className='textInfo'>Puedes hacer click en cualquier parte de la pantalla para salir</div>
    </div>
  )
}

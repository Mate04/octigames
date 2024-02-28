'use client'
import { useState, useEffect } from 'react'
import Banner from './banner'
import '../style/popAdd.css'

export default function PopAdd() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
  const randomTime = Math.floor(Math.random() * (15 - 3 + 1) + 3) * 60000;
    const timer = setInterval(() => {
      setIsVisible(true);
    }, randomTime); //180000 ms son 3 minutos
    return () => clearInterval(timer); // Limpiar el temporizador cuando el componente se desmonte
  }, []);

  const handleClick = () => {
    setIsVisible(!isVisible);
  } 

  return (
    <div className={`OcuparPantallaNegro ${isVisible ? '' : 'DisplayNone'}`} 
    onClick={handleClick}>
     
        <Banner className='children' keyAD={"6151989d0c251db92854297e8526ed06"} height={250} width={300}/>
        <div className='textInfo'>Puedes hacer click en cualquier parte de la pantalla para salir</div>
    </div>
  )
}

"use client"
import {useState} from 'react'
import '../style/dropdown.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import arrow from '../../public/arrow.png'
import Image from 'next/image'
export default function DropDown({listaJuegos }) {
    const [open, setOpen] = useState(false)
    const res = usePathname().replace('/','')
    return (
    <div className='dropdown'>
        <button onClick={()=>{setOpen(!open)}}>
        <p>
        {!res || res == 'game'.toUpperCase() ? 'Mas Juegos' : res.toUpperCase() }
        </p>
        {open ? <Image className='transition' alt='res' src={arrow} width={19}/> : <Image alt='res' className='transition image-rotate' src={arrow} width={19}/>}
        </button>
        {open && (
        <ul className='dropdown__ul'>
            {
                listaJuegos.map((juego, index) => (
                    <li key={index} onClick={()=>{setOpen(false)}}>
                        <Link className='dropdown__ul__li__link' href={`/${juego}`}>
                        {juego}
                        </Link>
                    </li>
                ))
            }
        </ul>
        )}
    </div>
    )
}

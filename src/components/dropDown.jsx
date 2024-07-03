"use client"
import { useState } from 'react'
import '../style/dropdown.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import arrow from '../../public/arrow.png'
import { BiSolidChevronDown } from "react-icons/bi";
import Image from 'next/image'
export default function DropDown({ listaJuegos }) {
    const [open, setOpen] = useState(false)
    const res = usePathname().replace('/', '')
    return (
        <div className='dropdown'>
            <button style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} onClick={() => { setOpen(!open) }}>
                <p className='dropdowntext'>
                    {!res || res == 'game' ? 'Categoria' : res.toUpperCase().replace('%', ' ')}
                </p>
                {open ? <BiSolidChevronDown size={14} style={{ color: "#fff" }} /> : <BiSolidChevronDown className='transition image-rotate' style={{ color: "#fff" }} />}
            </button>
            {open && (
                <ul className='dropdown__ul'>
                    {
                        listaJuegos.map((juego, index) => (
                            <li key={index} onClick={() => { setOpen(false) }}>
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

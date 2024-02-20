"use client"
import '../style/share.css'
import { FaWhatsapp } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
export default function Share() {
    const asPath  = useParams();
    console.log(asPath);
    return (
    <>
        <div className='share'>
            
            <ul>
                <li className='texta'>compartir en:</li>
                <li><Link color='#fff' href={`https://api.whatsapp.com/send?text=Mira este juego que lo vi en octiGame, el link es:`} ><FaWhatsapp size={'30px'} className='whatsapp'/></Link></li>
                <li><VscCode size={'30px'}/></li>
            </ul>
        </div>
    </>
    )
}

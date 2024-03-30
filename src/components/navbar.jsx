'use client'

import '../style/navbar.css'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.webp'
import SVG from './svg/component';
import Banner from './banner';
import { usePathname } from 'next/navigation';
import { bangersRegular} from '@/assets/localFont'
import DropDown from '@/components/dropDown'
import Search from './search';
export default function NavBar(){
    const effect = usePathname()
    const gameCategories = [
      ".IO",
      "3D",
      "Baby Hazel",
      "Bejeweled",
      "Boys",
      "Clicker",
      "Cooking",
      "Girls",
      "Hypercasual",
      "Puzzle",
      "Racing",
      "Soccer",
      "Stickman"
  ];
  
    const categorias = {
      shooter : {
        name: 'Multiplayer',
        svg : 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
      },
      casual : {
        name: 'Sports',
        svg : 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
      },
      Puzzle : {
        name: 'Arcade',
        svg : 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
      },
      DressUp : {
        name: '2 Player',
        svg : 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
      },
      Adventure : {
        name: 'Adventure',
        svg : 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
      },
      Battle : {
        name: 'Action',
        svg : 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
      },
      Art : {
        name: 'Shooting',
        svg : 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
      },
      Agility : {
        name: 'Stickman',
        svg : 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
      }
    }
    return (
    <>
    <nav className="navbar containerr" >
      
      <ul>
        <li>
          <Link href={'/'} className='TITULO'>
            <Image  src={logo} alt='octiGames' width={125} className='tituloOcti-link-img'/>
            <p className={`${bangersRegular.className} title`}>octiGames</p>
          </Link>
        </li>
        {effect ==  '/game' ? <li>
          <Banner width={320} height={50} keyAD={'6255d3c5fb923d4cc0f9a4c7fd594c5f'}/>
        </li> : <></>}
        
        <li className='Categorias'>
        {Object.keys(categorias).map((categoria) => (
          <SVG backGround={effect} key={categoria} name={categorias[categoria].name} svg={categorias[categoria].svg} width={33}/>
        ))}
        </li>
        <li className='drop'>
          <DropDown listaJuegos={gameCategories}/>
        </li>
        <li className='qsy'>
          <Search/>
        </li>
      </ul>
      
    </nav>
  </>
)
}


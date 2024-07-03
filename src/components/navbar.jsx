'use client'

import '../style/navbar.css'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.webp'
import SVG from './svg/component';
import Banner from './banner';
import { usePathname } from 'next/navigation';
import { bangersRegular } from '../assets/localFont'
import DropDown from '../components/dropDown'
import Search from './search';

import { IoIosPeople, IoIosMan } from "react-icons/io";
import { MdSportsFootball, MdOutlineDirectionsRun } from "react-icons/md";
import { GiPistolGun, GiMountainClimbing } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

export default function NavBar() {
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
    shooter: {
      name: 'Multiplayer',
      svg: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
      icon: <IoIosPeople />
    },
    casual: {
      name: 'Sports',
      svg: 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
      icon: <MdSportsFootball />
    },
    Puzzle: {
      name: 'Arcade',
      svg: 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
      icon: <FaGamepad />
    },
    DressUp: {
      name: '2 Player',
      svg: 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
      icon: <IoPeople />

    },
    Adventure: {
      name: 'Adventure',
      svg: 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
      icon: <GiMountainClimbing />
    },
    Battle: {
      name: 'Action',
      svg: 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
      icon: <MdOutlineDirectionsRun />

    },
    Art: {
      name: 'Shooting',
      svg: 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
      icon: <GiPistolGun />

    },
    Agility: {
      name: 'Stickman',
      svg: 'M2.25 18 9 11.25l4.306 4.306a11.95 16.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
      icon: <IoIosMan />
    }
  }
  return (
    <>
      <nav className="navbar container" >
        <ul>
          <li>
            <Link href={'/'} className='TITULO'>
              <Image src={logo} alt='octiGames' width={70} className='tituloOcti-link-img' style={{ marginLeft: 20 }} />
              <p className={`${bangersRegular.className} title`}>octiGames</p>

            </Link>
          </li>
          <Banner width={320} height={50} keyAD={'6255d3c5fb923d4cc0f9a4c7fd594c5f'} />
          <li className='Categorias'>
            {Object.keys(categorias).map((categoria) => (
              <Link key={categoria} href={`#`} className='categoria'>
                <div className='icon'>
                  {categorias[categoria].icon}
                </div>
                <p className='text'>{categorias[categoria].name}</p>
              </Link>
            ))}
          </li>
          <div className='categoriesContainer'>
            <DropDown listaJuegos={gameCategories} />
            <Search />
          </div>
        </ul>
      </nav>
    </>
  )
}


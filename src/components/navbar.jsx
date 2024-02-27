'use client'
import '../style/navbar.css'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png'
import SVG from './svg/component';
export default function NavBar(){
    const categoriass = [null,'Shooter', 'Casual', 'Puzzle', 'Dress-up', 'Adventure','Battle','Art','Agility'];

    const categorias = {
      shooter : {
        name: 'Shooter',
        svg : 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
      },
      casual : {
        name: 'casual',
        svg : 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
      }
    }
    return (
    <>
    <nav className="navbar containerr" >
      
      <ul>
        <li>
          <Link href={'/'} className='TITULO'>
            <Image  src={logo} alt='octiGames' width={125} className='tituloOcti-link-img'/>
            <p>octiGames</p>
          </Link>
        </li>
        <li className='Categorias'>
        {Object.keys(categorias).map((categoria) => (
          <SVG key={categoria} name={categorias[categoria].name} svg={categorias[categoria].svg} />
        ))}
        </li>
        <li>
        </li>
        
      </ul>
      
    </nav>
  </>
)
}


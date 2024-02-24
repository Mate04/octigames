
import '../style/navbar.css'
import Link from 'next/link';
import Dropdown from './dropdown';
import Image from 'next/image';
import logo from '../../public/logo.png'  
export default function NavBar(){
    const categorias = [null,'Shooter', 'Casual', 'Puzzle', 'Dress-up', 'Adventure'];
    return <>
    <nav className="navbar">
  <div className="containerr">
    <div className="titulo tituloOcti">
      <Link href='/' className='tituloOcti-link modak-regular'> 
        <Image src={logo} width={125} alt='octiGames' className='tituloOcti-link-img'/>
      </Link>
    </div>
    <ul>
      
      <li className="search">
        
        <div className="box">
          <div className="container-1">
              <span className="icon"><i className="fa fa-search"></i></span>
              <input type="search"  id="search" placeholder="Search..." />
          </div>
        </div>
      </li>
      
      <Dropdown options={categorias} defaultOption={null} />
    </ul>
  </div>
</nav>
</>
}


import '../style/navbar.css'
import Link from 'next/link';
export default function NavBar(){
    const categorias = [null,'Shooter', 'Casual', 'Puzzle', 'Dress-up', 'Adventure'];
    return <>
    <nav className="navbar">
  <div className="containerr">
    <div className="titulo tituloOcti">
      <Link href='/' className='tituloOcti-link'>octiGames</Link>
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

      {/* Mapeamos las categorías y mostramos solo aquellas que no son null */}
      {categorias.map((categoria, index) => {
              if (categoria !== null) {
                return <li key={index}><a href={`#${categoria}`}  >{categoria}</a></li>;
              } else {
                return null; // Si la categoría es null, no mostramos nada
              }
            })}
    </ul>
  </div>
</nav>
</>
}
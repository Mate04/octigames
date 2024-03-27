
import Link from 'next/link'
import '../../style/verMass.css'
export default function VerMas({nombreCategorias}) {
    return (
        <div className='ver-mas'>
            {nombreCategorias 
        ? <Link className='ver-mas-link' href={`/${nombreCategorias}`}>ver mas de {nombreCategorias}</Link>:
        <Link className='ver-mas-link' href={`/all`}>ver TODOS LOS JUEGOS</Link>}
        </div>
        )
}

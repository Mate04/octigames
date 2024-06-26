"use client"
import '../style/style.css'
import Link from 'next/link'
function Card({ juegos, component }) {
  return (
    <div className="card" style={{
      display: 'grid',
      gridTemplateColumns: component === 'home' ? 'repeat(3, 1fr)' : '1fr repeat(2, 2fr)',
      gridTemplateRows: component === 'home' ? '1fr' : '1fr'
    }}
    // grid-template-columns: 1fr repeat(2, 2fr);
    // grid-template-rows: 1fr; }}
    >
      {juegos.map((juego, index) => {
        const url = juego.url.split("/")
        const md5 = url[url.length - 2];
        console.log("juego: ", juego);
        return (
          <div className="children" key={index}>
            <Link href={`/game?Title=${juego.title}&Description=${juego.description}&Md5=${md5}`}>
              <img src={juego.thumb} alt={`${juego.title}`} />
            </Link>
            <p>{juego.title}</p>
          </div>
        )
      }
      )}
    </div>
  )
}

export default Card
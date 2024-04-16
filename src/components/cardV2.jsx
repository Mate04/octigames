"use client"
import '../style/style.css'
import Link from 'next/link'
function Card({ juegos }) {
  return (
    <div className="card">
      {juegos.map((juego, index) => {
        const url = juego.url.split("/")
        const md5 = url[url.length - 2];
        return (
          <div className="children" key={index}>
            <Link href={`/game?Title=${juego.title}&Description=${juego.description}&Md5=${md5}`}>
              <img src={juego.thumb} alt={`${juego.title}`} />
            </Link>
          </div>

        )
      }
      )}
    </div>
  )
}

export default Card
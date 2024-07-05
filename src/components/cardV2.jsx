"use client"
import '../style/style.css'
import Link from 'next/link'
function Card({ juegos, component }) {
  return (
    juegos.map((juego, index) => {
      const url = juego.url.split("/")
      const md5 = url[url.length - 2];
      return (
        <div className="children" key={index} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "240px" }}>
          <Link href={`/game?Title=${juego.title}&Description=${juego.description}&Md5=${md5}`}>
            <img src={juego.thumb} alt={`${juego.title}`} style={{ width: "100%", height: "auto", objectFit: "fill", aspectRatio: 1/1, borderRadius: 20 }} />
          </Link>
          <p>{juego.title}</p>
        </div>
      )
    }
    )
  )
}

export default Card
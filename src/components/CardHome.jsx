"use client"
import '../style/style.css'
import Link from 'next/link'
function CardHome({ juegos, component }) {
    return (
        <>
            {juegos.map((juego, index) => {
                const url = juego.url.split("/")
                const md5 = url[url.length - 2];
                return (
                    <Link style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} href={`/game?Title=${juego.title}&Description=${juego.description}&Md5=${md5}`} key={index}>
                        <img src={juego.thumb} alt={`${juego.title}`} style={{ width: "80%", height: "auto", objectFit: "fill", aspectRatio: 1/1, borderRadius: 20 }} />
                        <p style={{ color: "#000", fontWeight: "bold" }}>{juego.title}</p>
                    </Link>
                )
            }
            )}
        </>
    )
}

export default CardHome
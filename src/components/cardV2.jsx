"use client"
import '../style/style.css'
import Link from 'next/link'
function Card({ juegos }) {
    console.log(juegos);
  return (
    <>
      <div  className="card">
        {juegos.map((juego, index) => (
          <div className="children" key={index}>
            <Link href={`/`}>
              <img src={juego.thumb} alt={`${juego.title}`}  />
            </Link>
            {console.log(juego)}
        </div>
        
      ))}
      </div>
    </>
  )
}

export default Card
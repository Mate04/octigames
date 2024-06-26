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
            {console.log(juego)}
            <Link href={`/game?Md5=${juego.Md5}&Title=${juego.Title}&Description=${juego.Description}&Height=${juego.Height}&Width=${juego.Width}`}>
              <img src={juego.ThirdAssetElement} alt={`${juego.Title}`}  />
            </Link>
        </div>
        
      ))}
      </div>
    </>
  )
}

export default Card
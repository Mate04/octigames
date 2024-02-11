import '../style/style.css'
import subway from '../../public/589a3be05aa6293a4aac489d.png'//public\589a3be05aa6293a4aac489d.png
import Link from 'next/link'

function Card({ juegos }) {
  return (
    <>
        <div  className="card">
        {juegos.map((juego, index) => (
          <div className="children" key={index}>
            <Link href={`/juegos/${juego.Md5}`}>
              <img src={`https://img.gamedistribution.com/${juego.Md5}-512x512.jpg`} alt={`${juego.Title}`} />
            </Link>
          </div>
        
      ))}
      </div>
    </>
  )
}

export default Card
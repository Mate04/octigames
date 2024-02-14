import '../style/style.css'
import subway from '../../public/589a3be05aa6293a4aac489d.png'//public\589a3be05aa6293a4aac489d.png
import Link from 'next/link'

function Card({ juegos }) {
  
  return (
    <>
        <div  className="card">
        {juegos.map((juego, index) => (
          <div className="children" key={index}>
            <Link href={`/game?Md5=${juego.Md5}&Title=${juego.Title}&Description=${juego.Description}&Height=${juego.Height}&Width=${juego.Width}`}>
              <img src={juego.ThirdAssetElement} alt={`${juego.Title}`} />
            </Link>
          </div>
        
      ))}
      </div>
    </>
  )
}

export default Card
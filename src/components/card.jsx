import '../style/style.css'
import Image from 'next/image'
import subway from '../../public/589a3be05aa6293a4aac489d.png'//public\589a3be05aa6293a4aac489d.png
import Link from 'next/link'

function Card() {
  return (
    <div className="card">
        <div className="children"><Link href={'/juego1'}><Image src={subway} alt="" /></Link></div>
        <div className="children"><Link href={'/juego2'}><Image src={subway} alt="" /></Link></div>
        <div className="children"><Link href={'/juego3'}><Image src={subway} alt="" /></Link></div>
        <div className="children"><Link href={'/juego4'}><Image src={subway} alt="" /></Link></div>
    </div>
  )
}

export default Card
import Link from "next/link"

export default function SVG({name=null,width=25,color="white", svg=null, backGround = null}) {
  const res = backGround.replace('/','')
  return (
  <Link className={`categoria ${res ==name ? 'backGround' : ''}`} href={`/${name}`}>
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}px`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d={svg} />
    </svg>
    <div className="text">{name}</div>
    </Link>
    
    )
  }






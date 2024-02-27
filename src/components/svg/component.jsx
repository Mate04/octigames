

export default function SVG({name=null,width=25,color="white", svg="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}px`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d={svg} />
    </svg>
    )
  }






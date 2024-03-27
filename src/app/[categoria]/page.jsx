"use client"
import '../../style/categoria.css'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import getApiV2 from '@/api/getSideV2';
import Link from 'next/link';
import Spinner from '@/components/spinner';
import { technica} from '@/assets/localFont'
export default function Page() {
  const resultado = useParams();
  const categoria = resultado['categoria'];
  console.log(categoria);
  const info = {
    "All": "All",
    ".IO": "1",
    "2 Player": "2",
    "3D": "3",
    "Action": "0",
    "Adventure": "4",
    "Arcade": "5",
    "Baby Hazel": "19",
    "Bejeweled": "6",
    "Boys": "7",
    "Clicker": "8",
    "Cooking": "9",
    "Girls": "10",
    "Hypercasual": "11",
    "Multiplayer": "12",
    "Puzzle": "13",
    "Racing": "14",
    "Shooting": "15",
    "Soccer": "16",
    "Sports": "17",
    "Stickman": "18"
}
  return getApiV2('All',info[categoria]).then(data => {
    return (
      (
        <div className='containeerr'>
          <div className={`TituloCategoria ${technica.className}`}>
            {categoria}
          </div>
          <div className='Container-Categoria'>{ 
            data.map((datas, index)=>(
              <div key={index} >
                <Link className='key-Children' href={`/`}>
                  <img src={datas.thumb} alt={datas.title} className='Imagen-key'/>
                <p>
                  {datas.title}
                </p>
                </Link>
              </div>
            ))
            }</div>
        </div>
        )
    )
  })
  }
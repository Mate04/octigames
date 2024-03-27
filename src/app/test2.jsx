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
  if ( dataGame) {
    const resultadosFiltrados = getApiV2('All',categoria)
  return (
    <div className='containeerr'>
      <div className={`TituloCategoria ${technica.className}`}>
        {categoria}
      </div>
      <div className='Container-Categoria'>{ 
        resultadosFiltrados.map((data, index)=>(
          <div key={index} >
            <Link className='key-Children' href={`/game?Md5=${data.Md5}&Title=${data.Title}&Description=${data.Description}&Height=${data.Height}&Width=${data.Width}`}>
              <img src={data.ThirdAssetElement} alt={data.Title} className='Imagen-key'/>
            <p>
              {data.Title}
            </p>
            </Link>
          </div>
        ))
        }</div>
    </div>
    )
  }
else {
  return (<Spinner/>)
}}
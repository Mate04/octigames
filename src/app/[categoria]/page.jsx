"use client"
import '../../style/categoria.css'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import { getApi } from '@/api/getSide';
import Link from 'next/link';

export default function Page() {
  const resultado = useParams();
  const categoria = resultado['categoria'];
  const [dataGame, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi('all', categoria);
      setData(response);
    };

    fetchData();
  }, [categoria]);
  if ( dataGame) {
    const resultadosFiltrados = dataGame.map(resultado => {
    return {
      Title: resultado.Title,
      Description: resultado.Description,
      Md5: resultado.Md5,
      Height: resultado.Height,
      Width: resultado.Width,
      ThirdAssetElement: resultado.Asset.filter(url => url.includes('512x512'))[0],
      CategoryList: resultado.Category,
      Tags: resultado.Tag
    };
    });
  
  return (
    <div className='containeerr'>
      <div className='TituloCategoria modak-regular'>
        {categoria}
      </div>
      <div className='Container-Categoria'>{ 
        resultadosFiltrados.map((data, index)=>(
          <div key={index} className='key-Children'>
            <Link href={`/game?Md5=${data.Md5}&Title=${data.Title}&Description=${data.Description}&Height=${data.Height}&Width=${data.Width}`}>
              <img src={data.ThirdAssetElement} alt={data.Title} className='Imagen-key'/>
            </Link>
          </div>
        ))
        }</div>
    </div>
    )
  }
 
else {
  return (<div>
    cargando...
  </div>)
}}
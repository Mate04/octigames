"use client"
import '../../style/categoria.css'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import { getApi } from '../../api/getSide';
import Link from 'next/link';

export default function Page() {
  const resultado = useParams();
  const categoria = resultado['categoria'];
  const [dataGame, setData] = useState(null);
  const [count, setCount] = useState(1);
  const [hasMoreResults, setHasMoreResults] = useState(true);
  
  useEffect(()=>{
    const fetchData = async () => {
      const response = await getApi(100, categoria,1);
      setData(response);
    };
    fetchData();
  },[categoria])
  const load = async () =>{
    await setCount(count+1)
    const response = await getApi(100, categoria,count);
    if (response.length === 0) {
      
      setHasMoreResults(false);
    } else {
      setData(prevData => {
        const newData = [...prevData, ...response];
        return newData;
      });
    }

  };
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
        <div className='button-ver-mas' onClick={()=>{load()}}>
        {hasMoreResults ? (
        <div className='button-ver-mas' onClick={load}><button>Ver mas</button></div>
      ) : (
        <p>Ya no hay más resultados.</p>
      )}

        </div>
    </div>
    )
  }
else {
  return (<div>
    cargando...
  </div>)
}}
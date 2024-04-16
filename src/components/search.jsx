'use client'
import { useState } from 'react';
import { searchGame } from "@/service/search"
import Link from 'next/link';
import { AiOutlineSearch } from "react-icons/ai";

import '../style/search.css'
export default function Search() {
    const [inputValue, setInputValue] = useState('');
    const [res, setRes] = useState([])
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        const results = searchGame(event.target.value);
        setRes(results)
        // Aquí puedes manejar los resultados como prefieras
    }

    return (
        <>
            <form action="" className='search' autoComplete='off'>
                <label htmlFor="game-search"></label>
                <input type="text" id="game-search"  placeholder="buscar &#x1F50D;" value={inputValue} onChange={handleInputChange} />
            </form>
            {inputValue.trim() && (
                <div className='resultadosForm'>
                    {res.length > 0 ? (
                        res.map((juego, index) => (
                            <Link
                                key={index}
                                href={`/game?Title=${juego.title}&Description=${juego.description}&Md5=${juego.md5}`}
                                onClick={() => {
                                    setInputValue('')
                                    setRes([])
                                }}>
                                <img src={juego.thumb} className='imagenRes' />
                                <h1>{juego.title}</h1>
                            </Link>
                        ))
                    ) : (
                        <p>No se encontraron resultados</p>
                    )}
                </div>
            )}
        </>
    )
}

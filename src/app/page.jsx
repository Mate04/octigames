"use client"
import Categoria from "@/components/categorit";
import { getApi } from "@/api/getSide";
import React, { useState, useEffect } from "react";

export default function Home() {
    let contador = localStorage.getItem('contador')
    if (contador == 1){
        localStorage.removeItem('contador')
    }
    const categorias = [null,'Shooter', 'Casual', 'Puzzle', 'Dress-up', 'Adventure'];
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resultadosPorCategoria = await Promise.all(
                categorias.map(async (categoria) => {
                    const res = await getApi(40, categoria);

                    return res;
                })
            );
            setResultados(resultadosPorCategoria);
        };

        fetchData();
    }, []);

    return (
        <>
            {categorias.map((categoria, index) => (
                <Categoria
                    key={index}
                    nombreCategoria={categoria}
                    resultados={resultados[index]}
                />
            ))}
        </>
    );
}
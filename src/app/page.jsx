"use client"
import Categoria from "@/components/categorit";

export default function Home() {
    
    const categorias = [null,'Shooter', 'Casual', 'Puzzle', 'Dress-up', 'Adventure'];
    

    return (
        <>
            {categorias.map((categoria, index) => (
                <Categoria
                    key={index}
                    nombreCategoria={categoria}
                />
            ))}
        </>
    );
}
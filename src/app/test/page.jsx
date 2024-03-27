'use client'
import CategoriaV2 from '@/components/CategoriaV2';

export default  function Hola() {
  const categorias = {
    "All": "All",
    "1": ".IO",
    "2": "2 Player",
    "3": "3D",
    "0": "Action",
    "4": "Adventure",
    "5": "Arcade",
    "19": "Baby Hazel",
    "6": "Bejeweled",
    "7": "Boys",
    "8": "Clicker",
    "9": "Cooking",
    "10": "Girls",
    "11": "Hypercasual",
    "12": "Multiplayer",
    "13": "Puzzle",
    "14": "Racing",
    "15": "Shooting",
    "16": "Soccer",
    "17": "Sports",
    "18": "Stickman"
}
  const categoriasArray = Object.entries(categorias);
  return (
    <>
    {
        // Recorrer los primeros 6 elementos del array
        categoriasArray.slice(0, 6).map(([llave, valor]) => (
          <CategoriaV2 key={llave} numeroCategoria={llave} nombreCategoria={valor} />
        ))
      }
    </>
  );
}

'use client'
import CategoriaV2 from '@/components/CategoriaV2';

export default  function Page() {
  const categorias = {
    "All": "All",
    "12": "Multiplayer",
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
      <CategoriaV2 numeroCategoria={'mostplayed'} nombreCategoria={'Los mas populares'} popularity=''/>
      <CategoriaV2 numeroCategoria={'All'} nombreCategoria={'Categoria'}/>
      {
        // Recorrer los primeros 6 elementos del array
        categoriasArray.map(([llave, valor]) => {
          if (['0','12','5','17'].includes(llave)) {
            return (
              <CategoriaV2 key={llave} numeroCategoria={llave} nombreCategoria={valor}/>
            )
          }
        })
      }
    </>
  );
}

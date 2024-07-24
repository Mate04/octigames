'use client'
import CategoriaV2 from '../components/CategoriaV2';
import CardGrid from '../components/CardGrid';

export default function Page() {
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
      <h2 style={{ marginLeft: 40, marginBottom: 0 }}>Populares</h2>
      <CategoriaV2 numeroCategoria={'mostplayed'} nombreCategoria={'Los mas populares'} popularity='' />
      <h2 style={{ marginLeft: 40, marginBottom: 0 }}>Otros</h2>
      <CategoriaV2 numeroCategoria={'All'} nombreCategoria={'Categoria'} />
      <h2 style={{ marginLeft: 40 }}>Todos los juegos</h2>
      <CardGrid />
    </>
  );
}

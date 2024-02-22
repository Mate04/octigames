import '../style/carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './card'
import { getApi } from '@/api/getSide';
import CustomArrow from './carousel/buttonArrow';
import VerMas from './carousel/verMas';
export default async function Categoria({nombreCategoria = null, }) {
  const resultados  = await getApi(40,nombreCategoria);
  const resultadosFiltrados = resultados.map(resultado => {
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
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };
  const subResultados = chunkArray(resultadosFiltrados, 4);
  
  
  const responsive = {
      superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1700 },
            items: 6
          },
          tablets: {
            breakpoint: { max: 1700, min: 1400 },
            items: 5
          },
          tabletss: {
            breakpoint: { max: 1400, min: 1300 },
            items: 4
          },
          tablet: {
            breakpoint: { max: 1300, min: 700 },
            items: 3
          },
          mobile: {
            breakpoint: { max: 700, min: 480 },
            items: 2
          },
          mobiles: {
            breakpoint: { max: 480, min: 0 },
            items: 1
          }
        };
        
  if (resultados){
  return (
    <>
    {nombreCategoria === null ? 
    <div className="titulo" id={'mis-juegos'}>
      <div>Mis juegos</div>
    </div>: 
    <div className="titulo" id={nombreCategoria}>
        <div>{nombreCategoria}</div>
    </div>}
    
    <Carousel 
    responsive={responsive} 
    infinite={true}
    rtl={false}
    autoPlay={false}
    ssr={true}
    >
        {subResultados.map((subResultado, index) => (
          <Card key={index} juegos={subResultado} />
        ))}
    </Carousel>
    <VerMas nombreCategorias={nombreCategoria}/>
      </>
  )
  }
}


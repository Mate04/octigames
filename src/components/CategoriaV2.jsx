import Carousel from 'react-multi-carousel';
import '../style/carousel.css'
import 'react-multi-carousel/lib/styles.css';
import getApiV2 from '@/api/getSideV2';
import responsive from '@/api/responsive';
import Card from './cardV2';
import { technica } from "@/assets/localFont";

export default async function CategoriaV2({numeroCategoria='All',nombreCategoria='Todos los Juegos'}) {
    const responsiv = responsive()
    console.log(numeroCategoria);
    const res = await getApiV2(40,numeroCategoria)
    
    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };
    const subResultados = chunkArray(res, 4);
    
    return (
        <>
        <div className={`titulo ${technica.className}` }id={nombreCategoria}>
            <p>{nombreCategoria}</p>
        </div>
        <Carousel 
        responsive={responsiv}
        infinite={true}
        rtl={false}
        autoPlay={false}
        ssr={true}
        >
            {subResultados.map((subResultado, index) => (
          <Card key={index} juegos={subResultado} />
                ))}
        </Carousel>
        </>
    )
}

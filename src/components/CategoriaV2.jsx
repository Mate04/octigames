import Carousel from 'react-multi-carousel';
import '../style/carousel.css'
import 'react-multi-carousel/lib/styles.css';
import getApiV2 from '@/api/getSideV2';
import responsive from '@/api/responsive';
import Card from './cardV2';
import { technica } from "@/assets/localFont";
import getCategoria from '@/api/getCategoria';
export default function CategoriaV2({numeroCategoria='All',nombreCategoria='Todos los Juegos',popularity='branding'}) {
    const responsiv = responsive()
    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };
    const res = getCategoria(numeroCategoria)
    const resultado = res.map(item => ({
        id: item.id,
        description: item.description,
        title: item.title,
        url: item.url,
        thumb: item.thumb,
        width: item.width,
        height: item.height
    }));
    const subResultados = chunkArray(resultado,4)
    /*
    
    
    return getApiV2(40,numeroCategoria,popularity)
        .then(res => {
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
                    ))
                    }
                </Carousel>
                </>
            )
        })
        .catch(error => {
            console.error('Error al obtener los datos de la API:', error);
            throw error;
        });
        */
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
                ))
                }
            </Carousel>
        </>
)}

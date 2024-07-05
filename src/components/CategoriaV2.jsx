import Carousel from 'react-multi-carousel';
import '../style/carousel.css'
import 'react-multi-carousel/lib/styles.css';
// import getApiV2 from '@/api/getSideV2';
import { responsive } from '../api/responsive';
import Card from './cardV2';
// import { technica } from "@/assets/localFont";
import getCategoria from '../api/getCategoria';
export default function CategoriaV2({ component, numeroCategoria = 'All', nombreCategoria = 'Todos los Juegos', popularity = 'branding' }) {
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
    const subResultados = chunkArray(resultado, 1)

    return (
        <>
            <Carousel
                responsive={responsive}
                infinite={true}
                rtl={false}
                autoPlay={false}
                ssr={false}
                style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
            >
                {subResultados.map((subResultado, index) => (
                    <Card key={index} juegos={subResultado} component={component} />
                ))}
            </Carousel>
        </>
    )
}

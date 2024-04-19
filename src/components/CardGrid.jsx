import '../style/CardGrid.css'
import CardHome from './CardHome';
import getCategoria from '@/api/getCategoria';
export default function CategoriaGrid({ component, numeroCategoria = 'All', nombreCategoria = 'Todos los Juegos', popularity = 'branding' }) {
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
    const subResultados = chunkArray(resultado, 3)

    return (
        <div className='parent'>
            {subResultados.map((subResultado, index) => (
                <CardHome key={index} juegos={subResultado} component={component} />
            ))}
        </div>
    )
}

import '../style/CardGrid.css';
import { useEffect, useState } from 'react';
import CardHome from './CardHome';
import getApiV2 from '../api/getSideV2';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';

export default function CategoriaGrid({ component, numeroCategoria = 'All', nombreCategoria = 'Todos los Juegos', popularity = 'branding' }) {
    const [allData, setAllData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getApiV2(numeroCategoria, popularity);
                setAllData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [numeroCategoria, popularity]);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(allData.length / itemsPerPage)) setCurrentPage(currentPage + 1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = allData.slice(startIndex, startIndex + itemsPerPage);
    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };
    const subResultados = chunkArray(currentData, 3);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <div className='parent'>
                {subResultados.map((subResultado, index) => (
                    <CardHome key={index} juegos={subResultado} component={component} />
                ))}
            </div>
            <div className='pagination'>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    <BiChevronLeft />
                </button>
                <span>Página {currentPage} de {Math.ceil(allData.length / itemsPerPage)}</span>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(allData.length / itemsPerPage)}>
                    <BiChevronRight />
                </button>
            </div>
        </div>
    );
}

import '../style/CardGrid.css';
import { useEffect, useState, useCallback } from 'react';
import CardHome from './CardHome';
import getApiV2 from '../api/getSideV2';
import ReactLoading from 'react-loading';

export default function CategoriaGrid({ component, numeroCategoria = 'All', nombreCategoria = 'Todos los Juegos', popularity = 'branding' }) {
    const [allData, setAllData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getApiV2(numeroCategoria, popularity);
                setAllData(data);
                setDisplayData(data.slice(0, itemsPerPage)); // Initial load
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [numeroCategoria, popularity]);

    const loadMoreData = useCallback(() => {
        if (loadingMore) return;

        setLoadingMore(true);
        const nextPage = displayData.length / itemsPerPage;
        const newItems = allData.slice(displayData.length, displayData.length + itemsPerPage);
        setDisplayData(prevData => [...prevData, ...newItems]);
        setLoadingMore(false);
    }, [allData, displayData, itemsPerPage, loadingMore]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading && !loadingMore) {
                loadMoreData();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, loadingMore, loadMoreData]);

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };
    const subResultados = chunkArray(displayData, 3);

    return (
        <div>
            {loading &&
                <div style={{ display: "flex", width: "100%", height: "auto", justifyContent: "center", alignItems: "center" }}>
                    <ReactLoading type={"spin"} color="#fff" />
                </div>
            }
            <div className='parent'>
                {subResultados.map((subResultado, index) => (
                    <CardHome key={index} juegos={subResultado} component={component} />
                ))}
            </div>
            {loadingMore && <div>Loading more...</div>}
        </div>
    );
}

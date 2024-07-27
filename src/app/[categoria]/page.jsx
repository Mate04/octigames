"use client";
import '../../style/categoria.css';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import getApiV2 from '../../api/getSideV2';
import Link from 'next/link';
import Spinner from '../../components/spinner';
import { technica } from '../../assets/localFont';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';

const info = {
  "All": "All",
  ".IO": "1",
  "TwoPlayer": "2",
  "3D": "3",
  "Action": "0",
  "Adventure": "4",
  "Arcade": "5",
  "Baby Hazel": "19",
  "Bejeweled": "6",
  "Boys": "7",
  "Clicker": "8",
  "Cooking": "9",
  "Girls": "10",
  "Hypercasual": "11",
  "Multiplayer": "12",
  "Puzzle": "13",
  "Racing": "14",
  "Shooting": "15",
  "Soccer": "16",
  "Sports": "17",
  "Stickman": "18",
};

const Page = () => {
  const { categoria } = useParams();
  const [allData, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const categoriaSearch = info[categoria.replace('%20', ' ')] || 'All';
        const data = await getApiV2(categoriaSearch, 'branding');
        setAllData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoria]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(allData.length / itemsPerPage)) setCurrentPage(currentPage + 1);
  };

  if (loading) {
    return <Spinner />;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = allData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='containeerr'>
      <div className={`TituloCategoria ${technica.className}`}>
        {/* {categoria.replace('%20', ' ')} */}
      </div>
      <div className='Container-Categoria'>
        {currentData.map((datas, index) => {
          const url = datas.url.split("/");
          const md5 = url[url.length - 2];
          return (
            <div key={index}>
              <Link className='key-Children' href={`game?Title=${datas.title}&Description=${datas.description}&Md5=${md5}`}>
                <img src={datas.thumb} alt={datas.title} className='Imagen-key' />
                <p>{datas.title}</p>
              </Link>
            </div>
          );
        })}
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
};

export default Page;

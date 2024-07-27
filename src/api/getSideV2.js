import axios from 'axios';

const getApiV2 = async (category = 'All', popularity = 'branding') => {
  const apiUrl = 'https://gamemonetize.com/rssfeed.php';
  const queryParams = {
    format: 'json',
    category,
    type: 'html5',
    popularity,
    company: 'All',
    amount: '1000' // Load a large number of items to handle pagination locally
  };

  try {
    console.log('Obteniendo datos de la API con categoría:', { category });
    const response = await axios.get(apiUrl, { params: queryParams });
    return response.data.map((item) => ({
      id: item.id,
      description: item.description,
      title: item.title,
      url: item.url,
      thumb: item.thumb,
      width: item.width,
      height: item.height,
    }));
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    throw error;
  }
};

export default getApiV2;

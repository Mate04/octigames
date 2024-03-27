import axios from 'axios';

async function getApiV2(amount=30,category='All',popularity='branding'){
    
    const apiUrl = 'https://gamemonetize.com/rssfeed.php'
        const queryParams = {
            format: 'json',
            category: category,
            type: 'html5',
            popularity: popularity,
            company: 'All',
            amount: (amount-1).toString()
        }
    try {
        
        let response = await axios.get(apiUrl,{params:queryParams});
        response = response.data.map(item => ({
            id: item.id,
            description: item.description,
            title: item.title,
            url: item.url,
            thumb: item.thumb,
            width: item.width,
            height: item.height
        }));
        return response;
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        throw error;
    }
}

export default getApiV2
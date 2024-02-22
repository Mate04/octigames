import axios from 'axios';
export async function getApi(amount='all',categories='all',page=1,tags='all',){
    const apiUrl = 'https://catalog.api.gamedistribution.com/api/v2.0/rss/All/';
    if (categories === null){categories = 'all'}
    try {
        const queryParams = {
            amount: amount.toString(),
            categories:categories.toString(),
            tags:tags.toString(),
            format:'json',
            rewarded:'0',
            type:'html5',
            page:page.toString()
        };
        const response = await axios.get(apiUrl,{params:queryParams});
        
        return response.data; // Aquí ya tienes los datos de respuesta, no necesitas .json()
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        throw error; // Puedes manejar el error según sea necesario
    }

}   



import axios from 'axios';

const API_KEY = '55731551-c8f9ff8e643af6b8c00d564fe'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params: searchParams });
  
  return response.data;
}

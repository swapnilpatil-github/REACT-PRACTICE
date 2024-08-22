const API_KEY = '05ef2f4beaac4b3bba844e42e25bcf49';
const BASE_URL = 'https://newsapi.org/v2/everything';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

export const fetchNews = async (query) => {
  try {
    const response = await fetch(`${PROXY_URL}${BASE_URL}?q=${query}&apiKey=${API_KEY}`, {
      mode: 'cors', // Ensure CORS mode is set
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching the news:', error);
    throw error; 
  }
};

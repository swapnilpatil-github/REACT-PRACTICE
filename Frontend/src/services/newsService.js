// src/services/newsService.js

const API_KEY = '05ef2f4beaac4b3bba844e42e25bcf49';
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (query) => {
  const response = await fetch(`${BASE_URL}?q=${query}&apiKey=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  return await response.json();
};

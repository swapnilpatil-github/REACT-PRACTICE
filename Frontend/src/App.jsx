import React, { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import NewsList from './components/NewsLists.jsx';
import { fetchNews } from './services/newsService.js';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      const data = await fetchNews(query);
      setArticles(data.articles);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <h1 className="text-center text-4xl mt-10 font-bold">News Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      <NewsList articles={articles} />
    </div>
  );
}

export default App;

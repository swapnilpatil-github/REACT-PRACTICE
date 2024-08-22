import React from 'react';

const NewsList = ({ articles }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
      {articles.map((article) => (
        <div key={article.url} className="border p-4 rounded-lg shadow-lg">
          <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="mt-4 font-bold text-xl">{article.title}</h2>
          <p className="mt-2 text-gray-700">{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;

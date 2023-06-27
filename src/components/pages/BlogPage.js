
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            apiKey: 'a33d1776a5ae4de984f604e46aa72650',
            q: 'nutrição',
            language: 'pt',
            pageSize: 10, 
            page: currentPage, 
          },
        });

        setArticles(response.data.articles);
        setTotalPages(Math.ceil(response.data.totalResults / 25)); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="blog-container" style={{ marginBottom: '50px' }}>
      <h1>Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.title}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Leia mais
            </a>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default BlogPage;

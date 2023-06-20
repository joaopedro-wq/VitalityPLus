import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://api.mediastack.com/v1/news', {
          params: {
            access_key: '1bf9ad7c09f99b53703ed6125c069e0c',
            keywords: '',
            languages: 'pt',
          },
        });

        setArticles(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className='blog-container'>
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
    </div>
  );
}

export default BlogPage;

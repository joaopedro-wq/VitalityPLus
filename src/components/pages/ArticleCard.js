import React from 'react';

function ArticleCard({ title, author, date, content }) {
  return (
    <div className="article-card">
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Date: {date}</p>
      <p>{content}</p>
    </div>
  );
}

export default ArticleCard;

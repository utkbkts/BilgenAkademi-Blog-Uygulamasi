import React from "react";

import "../../styles/BlogItem.css";
const BlogItem = ({ name, url, author, date, description }) => {
  return (
    <div className="container_blog">
      <div className="product_Item">
        <div className="image">
          <img src={url} />
        </div>
        <div className="product_detail">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="product_author">
            <span>{author}</span>
            <span>{date}</span>
          </div>
          <div className="button_wrapper">
            <button color="primary" size="sm">
              Güncelle
            </button>
            <button color="danger" size="sm">
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

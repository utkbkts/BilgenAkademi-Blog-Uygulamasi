import React from "react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import "../../styles/BlogItem.css";
const BlogItem = ({
  name,
  author,
  date,
  description,
  image,
  id,
  onDelete,
  onUpdate,
  url,
}) => {
  return (
    <div className="container_blog">
      <div className="product_Item">
        <div className="image">
          <img src={image || url} alt={`resim-${name}`} />
        </div>
        <div className="product_detail">
          <h1>{name}</h1>
          <p>{description.slice(0, 40)}...</p>
          <div className="product_author">
            <span>{author}</span>
            <span>{date}</span>
          </div>
          <div className="button_wrapper">
            <Link to={`/create/${id}`}>
              {" "}
              <Button onClick={() => onUpdate(id)} color="primary" size="sm">
                Güncelle
              </Button>
            </Link>
            <Button onClick={() => onDelete(id)} color="danger" size="sm">
              Sil
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

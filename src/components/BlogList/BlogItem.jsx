import React from "react";

import "../../styles/BlogItem.css";
import Button from "../ui/Button";
const BlogItem = ({
  name,
  url,
  id,
  author,
  date,
  description,
  image,
  onUpdateItem,
  setProducts,
  category,
}) => {
  const handleDeleteItem = () => {
    if (window.confirm("Silmek istediğinize emin misiniz ?")) {
      setProducts((products) =>
        products.filter((product) => {
          return product.id !== id;
        })
      );
    } else {
      return;
    }
  };
  return (
    <div className="container_blog">
      <div className="product_Item">
        <div className="image">
          <img src={url || image} />
        </div>
        <div className="product_detail">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="product_author">
            <span>{author}</span>
            <span>{date}</span>
          </div>
          <div className="product-category">
            {" "}
            {Array.isArray(category) ? category.join(",") : category}
          </div>
          <div className="button_wrapper">
            <Button
              onClick={() =>
                onUpdateItem({
                  id,
                  name,
                  url,
                  author,
                  date,
                  description,
                  image,
                })
              }
              color="primary"
              size="sm"
            >
              Güncelle
            </Button>
            <Button
              onClick={() => handleDeleteItem(id)}
              color="danger"
              size="sm"
            >
              Sil
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

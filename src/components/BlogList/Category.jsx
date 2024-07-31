import React from "react";
import "../../styles/category.css";
const Category = ({ categories, onCategoryClick, categoryProducts }) => {
  return (
    <div className="category-list">
      <span>Kategoriler</span>
      <div className="__a">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`btn-category ${
              categoryProducts === category ? "active" : ""
            }`}
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;

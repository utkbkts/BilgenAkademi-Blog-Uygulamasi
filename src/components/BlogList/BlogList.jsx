import React, { useState } from "react";

import BlogItem from "./BlogItem";
import "../../styles/BlogList.css";
import Search from "../search/Search";
import blogData from "../../data/BlogData";
import Header from "../header/Header";
import Modal from "./Modal";

const BlogList = () => {
  const [products, setProducts] = useState(blogData);
  const [searchData, setsearchData] = useState("");
  const [showModal, setIsShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    author: "",
    date: "",
  });

  const handleSubmit = (productData) => {
    const newProduct = {
      ...productData,
      id: Math.random(),
    };
    setProducts([newProduct, ...products]);
  };

  return (
    <div className="container">
      <div>
        <Header setIsShowModal={setIsShowModal} showModal={showModal} />
        {showModal && (
          <Modal
            setIsShowModal={setIsShowModal}
            setForm={setForm}
            form={form}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
      <div>
        <Search />
      </div>
      <div className="wrapper">
        {products.length > 0 ? (
          products.map((item) => (
            <BlogItem
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
              author={item.author}
              date={item.date}
              description={item.description}
            />
          ))
        ) : (
          <div className="no-results">
            Böyle "" bir yazar veya blog ismi bulunamadı...
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;

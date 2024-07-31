import React, { useState } from "react";

import BlogItem from "./BlogItem";
import "../../styles/BlogList.css";
import Search from "../search/Search";
import blogData from "../../data/BlogData";
import Header from "../header/Header";
import Modal from "./Modal";
import Category from "./Category";

const BlogList = () => {
  const [products, setProducts] = useState(blogData);
  const [searchData, setSearchData] = useState("");
  const [showModal, setIsShowModal] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [sortProducts, setSortProducts] = useState("");
  const [categoryProducts, setCategoryProducts] = useState("");
  const [productToUpdate, setProductToUpdate] = useState("");

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

  const handleSearch = () => {
    setIsSearched(true);
    const filteredProducts = blogData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchData.toLowerCase()) ||
        item.author.toLowerCase().includes(searchData.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleSort = (sorted) => {
    setIsSearched(true);
    setSortProducts(sorted);
    const sortedProducts = [...products].sort((a, b) => {
      if (sorted === "name") {
        return a.name.localeCompare(b.name);
      } else if (sorted === "author") {
        return a.author.localeCompare(b.author);
      } else if (sorted === "date") {
        return new Date(b.date) - new Date(a.date);
      }
      return;
    });
    setProducts(sortedProducts);
  };

  const categories = [
    ...new Set(blogData.flatMap((item) => item.category).filter(Boolean)),
  ];

  const handleCategory = (category) => {
    setIsSearched(true);

    setCategoryProducts(category);
    const filteredProducts = blogData.filter((item) =>
      item.category.includes(category)
    );
    setProducts(filteredProducts);
  };

  const handleReset = () => {
    setSearchData("");
    setProducts(blogData);
    setIsSearched(false);
    setSortProducts("");
    setCategoryProducts("");
  };

  const handleUpdateItem = (product) => {
    setProductToUpdate(product);
    setForm(product);
    setIsShowModal(true);
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
            productToUpdate={productToUpdate}
            setProductToUpdate={setProductToUpdate}
            handleSubmit={handleSubmit}
            setProducts={setProducts}
          />
        )}
      </div>
      <div>
        <Search
          handleReset={handleReset}
          handleSearch={handleSearch}
          searchData={searchData}
          isSearched={isSearched}
          setSearchData={setSearchData}
          handleSort={handleSort}
          sortProducts={sortProducts}
        />
      </div>
      <div className="category">
        <Category
          categoryProducts={categoryProducts}
          categories={categories}
          onCategoryClick={handleCategory}
        />
      </div>
      <div className="wrapper">
        {products.length > 0 ? (
          products.map((item) => (
            <BlogItem
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
              image={item.image}
              author={item.author}
              date={item.date}
              category={item.category}
              description={item.description}
              onUpdateItem={handleUpdateItem}
              setProducts={setProducts}
            />
          ))
        ) : (
          <div className="no-results">
            Böyle "{searchData}" bir yazar veya blog ismi bulunamadı...
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;

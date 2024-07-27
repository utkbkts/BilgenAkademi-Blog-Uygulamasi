import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

import BlogItem from "./BlogItem";
import "../../styles/BlogList.css";
import Search from "../search/Search";
import blogData from "../../data/BlogData";
import AddNewBlog from "./AddNewBlog";

const BlogList = () => {
  const [searchData, setSearchData] = useState(blogData);
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [productToUpdate, setProductToUpdate] = useState();
  const [productData, setProductData] = useState({
    name: "",
    date: "",
    author: "",
    description: "",
    image: "",
  });

  function handleSubmit(productData) {
    const newProduct = {
      ...productData,
      id: Math.random(),
    };

    setSearchData([newProduct, ...searchData]);
  }

  // Arama işlemi
  const handleSearch = (search) => {
    setSearchTerm(search);
    if (search.trim().length > 0) {
      const filteredData = searchData.filter((blog) => {
        return (
          blog.name.toLowerCase().includes(search.toLowerCase()) ||
          blog.author.toLowerCase().includes(search.toLowerCase())
        );
      });
      setSearchData(filteredData);
      setActive(true);
    } else {
      setSearchData(blogData);
      setActive(false);
    }
  };

  // Sıralama işlemi
  const handleSort = (value) => {
    setActive(true);

    const sortedData = [...searchData].sort((a, b) => {
      if (value === "author") {
        return a.author.localeCompare(b.author);
      } else if (value === "date") {
        return new Date(b.date) - new Date(a.date); // Sorting by date
      }
    });

    setSearchData(sortedData);
  };

  // Silme işlemi
  const handleDelete = (id) => {
    if (window.confirm("Silmek istediğine emin misin ?")) {
      setSearchData((products) =>
        products.filter((product) => {
          return product.id !== id;
        })
      );
      toast.success("Başarıyla Silindi");
    } else {
      toast.error("Silinme İşlemi Sırasında bir hata oluştu");
    }
  };

  function handleUpdateItem(product) {
    setProductToUpdate(product);
    setProductData(product);

    window.scrollTo(0, 0);
  }

  return (
    <div className="container">
      <div>
        <AddNewBlog
          handleSubmit={handleSubmit}
          productData={productData}
          setProductData={setProductData}
          productToUpdate={productToUpdate}
          setProducts={setSearchData}
        />
      </div>
      <div>
        <Search
          active={active}
          handleSearch={handleSearch}
          handleSort={handleSort}
        />
      </div>
      <div className="wrapper">
        {searchData.length > 0 ? (
          searchData.map((item) => (
            <BlogItem
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
              author={item.author}
              date={item.date}
              description={item.description}
              image={item.image}
              onDelete={handleDelete}
              onUpdateItem={handleUpdateItem}
            />
          ))
        ) : (
          <div className="no-results">
            Böyle "{`${searchTerm}`}" bir yazar veya blog ismi bulunamadı...
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;

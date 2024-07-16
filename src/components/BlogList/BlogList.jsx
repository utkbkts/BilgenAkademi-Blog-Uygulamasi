import React, { useState, useEffect } from "react";
import BlogItem from "./BlogItem";
import "../../styles/BlogList.css";
import Search from "../search/Search";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, updateData } from "../../redux/features/dataSlice";
import toast from "react-hot-toast";

const BlogList = () => {
  const data = useSelector((state) => state.data.datas);
  const [searchData, setSearchData] = useState(data);
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  // data değiştiğinde searchData'yı güncelle
  useEffect(() => {
    setSearchData(data);
  }, [data]);

  // Arama işlemi
  const handleSearch = (search) => {
    setSearchTerm(search);
    if (search.trim().length > 0) {
      const filteredData = data.filter((blog) => {
        return (
          blog.name.toLowerCase().includes(search.toLowerCase()) ||
          blog.author.toLowerCase().includes(search.toLowerCase())
        );
      });
      setSearchData(filteredData);
      setActive(true);
    } else {
      setSearchData(data);
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
        return new Date(b.date) - new Date(a.date);
      }
    });

    setSearchData(sortedData);
  };

  // Silme işlemi
  const handleDelete = (id) => {
    if (window.confirm("Silmek istediğine emin misin ?")) {
      toast.success("Başarıyla Silindi");
      dispatch(deleteData(id));
    } else {
      toast.error("Silinme İşlemi Sırasında bir hata oluştu");
    }
  };
  //güncelleme işlemi
  const handleUpdate = (id) => {
    dispatch(updateData(id));
  };

  return (
    <div className="container">
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
              onUpdate={handleUpdate}
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

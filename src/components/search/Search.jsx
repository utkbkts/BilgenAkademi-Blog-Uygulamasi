import React, { useState } from "react";
import "../../styles/Search.css";
import Button from "../ui/Button";
import { IoSearch } from "react-icons/io5";

const Search = ({ handleSearch, handleSort, active }) => {
  const [search, setSearch] = useState("");
  const [sortValue, setSortValue] = useState("");

  const sortOptions = [
    { item: "author", text: "Yazar" },
    { item: "date", text: "Tarih" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    handleSearch(search);
  };
  //input değeri aldık ve handle sort içine props geçtik değeri gönderdik
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortValue(value);
    handleSort(value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSearch("");
    handleSearch("");
    setSortValue("");
  };

  return (
    <div className="search-container">
      <form>
        <div className="wrapper_search">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Blog adı veya yazar adıyla arayın"
          />
          <select
            name="searchFilter"
            value={sortValue}
            onChange={handleSortChange}
          >
            <option value="" disabled hidden>
              Filtreleyin
            </option>
            {sortOptions.map((sort, index) => (
              <option key={index} value={sort.item}>
                {sort.text}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            justifyContent: "center",
          }}
        >
          {search.length > 0 && (
            <Button color="primary" size="md" onClick={handleClick}>
              <IoSearch style={{ marginBottom: "2px" }} /> Ara
            </Button>
          )}
          {active && (
            <Button color="danger" size="md" onClick={handleReset}>
              Reset
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;

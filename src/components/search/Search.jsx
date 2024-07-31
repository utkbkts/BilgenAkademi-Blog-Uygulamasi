import "../../styles/Search.css";
import Button from "../ui/Button";
import { CiSearch } from "react-icons/ci";

const Search = ({
  handleSearch,
  searchData,
  setSearchData,
  handleReset,
  isSearched,
  handleSort,
  sortProducts,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const onSortChange = (e) => {
    handleSort(e.target.value);
  };

  return (
    <div className="search-container">
      <form onSubmit={onSubmit}>
        <div className="wrapper_search">
          <div className="__a">
            <input
              type="text"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              name="search"
              placeholder="Blog adı veya yazar adıyla arayın"
            />
            <CiSearch size={25} className="icon" color="black" />
          </div>
          <select
            name="searchFilter"
            value={sortProducts}
            onChange={onSortChange}
          >
            <option value="" disabled hidden>
              Filtreleyin
            </option>
            <option value="name">İsme Göre</option>
            <option value="author">Yazara Göre</option>
            <option value="date">Tarihe Göre</option>
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
          {searchData.length > 0 && (
            <Button size={"sm"} type={"submit"} color="primary">
              Ara
            </Button>
          )}
          {isSearched && (
            <Button
              onClick={handleReset}
              size={"sm"}
              type={"submit"}
              color="danger"
            >
              Sıfırla
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;

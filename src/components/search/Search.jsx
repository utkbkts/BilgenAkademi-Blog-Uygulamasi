import "../../styles/Search.css";

const Search = () => {
  return (
    <div className="search-container">
      <form>
        <div className="wrapper_search">
          <input
            type="text"
            name="search"
            placeholder="Blog adı veya yazar adıyla arayın"
          />
          <select name="searchFilter">
            <option value="" disabled hidden>
              Filtreleyin
            </option>
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
          <button>Ara</button>
          <button>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Search;

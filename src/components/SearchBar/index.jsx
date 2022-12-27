import React from "react";

const SearchBar = ({handleSearch}) => {
  return (
    <form>
      <div className="input-group mb-3 w-75 mx-auto">
        <input
          type="search"
          placeholder="Search"
          className="form-control"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </form>
  );
};

export default SearchBar;

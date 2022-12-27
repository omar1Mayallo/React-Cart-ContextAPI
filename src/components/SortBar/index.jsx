import React from "react";

const SortBar = ({results = 0, handleSortChange}) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <span className="lead">Results : {results}</span>
      <div className="form-group">
        <select
          className="form-select"
          onChange={(e) => {
            handleSortChange(e);
          }}
        >
          <option>Default sort</option>
          <option>Price high to low</option>
          <option>Price low to high</option>
          <option>Rating high to low</option>
          <option>Rating low to high</option>
          <option>Name alphabetical</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;

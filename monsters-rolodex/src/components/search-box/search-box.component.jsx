import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ onSearchChange }) => (
  <div className="search">
    <input
      type="search"
      placeholder="Search Monsters"
      onChange={onSearchChange}
    />
  </div>
);

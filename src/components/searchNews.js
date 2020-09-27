import React, { useState, useContext } from "react";
import axios from "axios";

function SearchMovies(props) {
  const { commonProps } = props;
  const { searchValueFunction } = commonProps;
  const [searchtext, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchValueFunction(searchtext);
  };

  return (
    <div className="search-news">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search a topic,news"
          value={searchtext}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchMovies;

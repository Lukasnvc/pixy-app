import React, { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { Search } from "./stylesSeachBar";

const SearchBar = ({ setSearch }) => {
  const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState("Search");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setPlaceholder("Type seach here...");
      setSearch("");
    }
    setSearch(text);
    setText("");
  };

  return (
    <>
      <Search>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            placeholder={placeholder}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
      </Search>
    </>
  );
};

export default SearchBar;

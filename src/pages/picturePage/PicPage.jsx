import React, { useState } from "react";
import { ScrollableDiv, Wrapper } from "./stylesPicPage";

import Pictures from "../../components/pictures/Pictures";
import SearchBar from "../../components/searchBar/SearchBar";

const PicPage = () => {
  const [search, setSearch] = useState("");
  return (
    <Wrapper>
      <SearchBar setSearch={setSearch} />
      <ScrollableDiv>
        <Pictures search={search} />
      </ScrollableDiv>
    </Wrapper>
  );
};

export default PicPage;

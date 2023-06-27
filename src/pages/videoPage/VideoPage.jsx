import React, { useState } from "react";
import { ScrollableDiv, Wrapper } from "./stylesVideoPage";

import SearchBar from "../../components/searchBar/SearchBar";
import Videos from "../../components/videos/Videos";

const VideoPage = () => {
  const [search, setSearch] = useState("");
  return (
    <Wrapper>
      <SearchBar setSearch={setSearch} />
      <ScrollableDiv>
        <Videos search={search} />
      </ScrollableDiv>
    </Wrapper>
  );
};

export default VideoPage;

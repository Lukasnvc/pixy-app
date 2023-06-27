import { ScrollableDiv, Wrapper } from "./stylesHomePage";
import { useTotalPictures, useTotalVideos } from "../../hooks/useApi";

import Pictures from "../../components/pictures/Pictures";
import React from "react";
import Videos from "../../components/videos/Videos";

const HomePage = () => {
  const { data: picturesData, isLoading: picturesLoading } = useTotalPictures();
  const { data: videosData, isLoading: videosLoading } = useTotalVideos();
  return (
    <Wrapper>
      <ScrollableDiv>
        <p>
          Unleash Your Imagination with{" "}
          <span>{!picturesLoading ? picturesData?.total : <>Loading...</>}</span> Downloadable
          Pictures!
        </p>
        <Pictures />
      </ScrollableDiv>
      <ScrollableDiv>
        <p>
          Explore <span>{!videosLoading ? videosData?.total : <>Loading...</>} </span>Downloadable
          Videos - Ignite Your Visual Journey!
        </p>
        <Videos />
      </ScrollableDiv>
    </Wrapper>
  );
};

export default HomePage;

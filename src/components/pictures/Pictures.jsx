import { AllPics, NotFound, Slink, Wrapper } from "./stylesPictures";
import React, { useEffect, useState } from "react";

import { ColorRing } from "react-loader-spinner";
import { Waypoint } from "react-waypoint";
import { fetchImages } from "../../api/pixabay";
import notFound from "../../assets/png/notFound.png";
import { useImages } from "../../hooks/useApi";

const Pictures = ({ search }) => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { data, isLoading } = useImages(search, page.toString(), null, search);

  useEffect(() => {
    if (data && data.length > 0) {
      setContent(data);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    setContent([]);
    loadMoreData();
  }, [search]);

  const loadMoreData = async () => {
    const additionalData = await fetchImages(search, (page + 1).toString(), null);
    if (additionalData.length > 0) {
      setContent((prevContent) => [...prevContent, ...additionalData]);
      setPage((prevPage) => prevPage + 1);
    } else {
      setHasMore(false);
    }
  };

  const handleWaypointEnter = () => {
    if (!isLoading && hasMore) {
      loadMoreData();
    }
  };

  return (
    <Wrapper>
      <AllPics>
        <ColorRing
          visible={isLoading}
          height={200}
          width={200}
          colors={["#C2DEDC", "#ECE5C7", "#CDC2AE", "#116A7B", "#F8F6F4"]}
        />
        {content.length < 1 && !isLoading && <NotFound src={notFound} alt="Not Found" />}
        {content.map((item, index) => (
          <Slink to={`/detail/pictures/${item.id}`} key={item.id + item.tags + index}>
            <img src={item.webformatURL} alt={item.type} />
            <div>
              <span>
                Large {item.imageHeight}x{item.imageWidth}px
              </span>
              <span>
                Medium {item.webformatHeight}x{item.webformatWidth}px
              </span>
              <span>
                Small {item.previewHeight}x{item.previewWidth}px
              </span>
            </div>
          </Slink>
        ))}
        <Waypoint onEnter={handleWaypointEnter} />
      </AllPics>
    </Wrapper>
  );
};

export default Pictures;

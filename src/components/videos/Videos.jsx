import { AllPics, Card, NotFound, Slink, Wrapper } from "./stylesVideos";
import React, { useEffect, useState } from "react";

import { ColorRing } from "react-loader-spinner";
import { FiDownload } from "react-icons/fi";
import { Waypoint } from "react-waypoint";
import { fetchVideos } from "../../api/pixabay";
import notFound from "../../assets/png/notFound.png";
import { useVideos } from "../../hooks/useApi";

const Videos = ({ search }) => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { data, isLoading } = useVideos(search, page.toString(), null, search);
  useEffect(() => {
    if (data && data.length > 0 && data.includes(data.videos)) {
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
    const additionalData = await fetchVideos(search, (page + 1).toString(), null);
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
          height="200"
          width="200"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#C2DEDC", "#ECE5C7", "#CDC2AE", "#116A7B", "#F8F6F4"]}
        />
        {content?.length < 1 && !isLoading && <NotFound src={notFound} alt="Not Found" />}
        {content?.map((item, index) => (
          <Slink to={`/detail/videos/${item.id}`} key={item.id + item.tags + index}>
            <Card>
              {" "}
              <video
                src={item.videos?.tiny?.url}
                alt={item.type}
                playsInline
                autoPlay
                loop
                muted
                controls={true}
              />
              <div>
                <span>
                  Download
                  <FiDownload />
                </span>

                <span>Duration {item?.duration}s</span>
                <span>
                  Large {item.videos?.large?.height}x{item.videos?.large?.width}px
                </span>
                <span>
                  Medium {item?.videos?.medium?.height}x{item.videos?.medium?.width}px
                </span>
                <span>
                  Small {item.videos?.small?.height}x{item.videos?.small?.width}px
                </span>
              </div>
            </Card>
          </Slink>
        ))}
        <Waypoint onEnter={handleWaypointEnter} />
      </AllPics>
    </Wrapper>
  );
};

export default Videos;

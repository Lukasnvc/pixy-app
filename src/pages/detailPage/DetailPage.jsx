import { Card, Downloads, Left, Right, Title, Wrapper } from "./stylesDetailPage";
import React, { useEffect, useState } from "react";
import { useSingleImage, useSingleVideo } from "../../hooks/useApi";

import { AiOutlineArrowRight } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ColorRing } from "react-loader-spinner";
import { IoMdDownload } from "react-icons/io";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [video, setVideo] = useState("");
  const params = useParams();
  const category = params.category;
  const { data, isLoading } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    params.category === "pictures" ? useSingleImage(params.id) : useSingleVideo(params.id);

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      link.target = "_blank";
      link.click();

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  useEffect(() => {
    if (category === "videos" && data && data[0]?.videos?.large?.url) {
      setVideo(data[0]?.videos?.large?.url);
    }
  }, [category, data]);

  return (
    <Wrapper>
      <ColorRing
        visible={isLoading}
        height="200"
        width="200"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#C2DEDC", "#ECE5C7", "#CDC2AE", "#116A7B", "#F8F6F4"]}
      />
      {!isLoading && (
        <Card>
          <Left>
            {category === "pictures" ? (
              <img src={data[0].webformatURL} alt={data[0]?.tags} />
            ) : (
              <video src={video} controls={true} autoPlay muted playsInline loop type="video/mp4" />
            )}
          </Left>
          <Right>
            <Title>
              <h4>
                Tags: <i>{data[0]?.tags}</i>
              </h4>
              {category === "videos" && (
                <h5>
                  Duration: <i>{data[0]?.duration}s</i>
                </h5>
              )}
              <div>
                <span>
                  Views: <br />
                  {data[0]?.views}
                </span>
                <span>
                  Downloads: <br />
                  {data[0]?.downloads}
                </span>
              </div>
            </Title>
            {category === "videos" ? (
              <>
                <div>
                  <button onClick={() => setVideo(data[0]?.videos?.large?.url)}>
                    Large {data[0]?.videos?.large?.width}x{data[0]?.videos?.large?.height}px{" "}
                  </button>
                  <button onClick={() => setVideo(data[0]?.videos?.medium?.url)}>
                    Medium {data[0]?.videos?.medium?.width}x{data[0]?.videos?.medium?.height}px
                  </button>
                  <button onClick={() => setVideo(data[0]?.videos?.small?.url)}>
                    Small {data[0]?.videos?.small?.width}x{data[0]?.videos?.small?.height}px
                  </button>
                  <button onClick={() => setVideo(data[0]?.videos?.tiny?.url)}>
                    Tiny {data[0]?.videos?.tiny?.width}x{data[0]?.videos?.tiny?.height}px
                  </button>
                </div>
                <Downloads>
                  <span>
                    Press <BsThreeDotsVertical /> on player and <IoMdDownload /> Download
                  </span>
                  <span>
                    <i>*SAFARI</i> Left click on video <AiOutlineArrowRight /> "Download Video As"
                  </span>
                </Downloads>
              </>
            ) : (
              <div>
                <button onClick={() => handleDownload(data[0]?.largeImageURL, "Large.jpg")}>
                  Large {data[0]?.imageHeight}x{data[0]?.imageWidth}px
                </button>
                <button onClick={() => handleDownload(data[0]?.webformatURL, "Medium.jpg")}>
                  Medium {data[0]?.webformatHeight}x{data[0]?.webformatWidth}px
                </button>
                <button onClick={() => handleDownload(data[0]?.previewURL, "Small.jpg")}>
                  Small {data[0]?.previewHeight}x{data[0]?.previewWidth}px
                </button>
              </div>
            )}
          </Right>
        </Card>
      )}
    </Wrapper>
  );
};

export default DetailPage;

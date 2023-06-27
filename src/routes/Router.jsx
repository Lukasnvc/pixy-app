import { Route, Routes } from "react-router-dom";

import DetailPage from "../pages/detailPage/DetailPage";
import HomePage from "../pages/homePage/HomePage";
import PicPage from "../pages/picturePage/PicPage";
import React from "react";
import VideoPage from "../pages/videoPage/VideoPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="pictures" element={<PicPage />} />
      <Route path="videos" element={<VideoPage />} />
      <Route path="detail/:category/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default Router;
import {
  fetchImages,
  fetchPicturesTotal,
  fetchSingleImage,
  fetchSingleVideo,
  fetchVideos,
  fetchVideosTotal,
} from "../api/pixabay";

import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

const IMAGES = "IMAGES";
const VIDEOS = "VIDEOS";

export const useImages = (search, page, id) => {
  const initialFetchRef = useRef(true);
  return useQuery({
    queryKey: [IMAGES, search],
    queryFn: () => {
      if (initialFetchRef.current) {
        initialFetchRef.current = false;
        return fetchImages(search, page, id);
      }
      return new Promise((resolve) => resolve([]));
    },
  });
};

export const useSingleImage = (id) => {
  return useQuery({
    queryKey: [IMAGES, id],
    queryFn: () => fetchSingleImage(id),
  });
};

export const useVideos = (search, page, id) => {
  const initialFetchRef = useRef(true);

  return useQuery({
    queryKey: [VIDEOS, search],
    queryFn: () => {
      if (initialFetchRef.current) {
        initialFetchRef.current = false;
        return fetchVideos(search, page, id);
      }
      return new Promise((resolve) => resolve([]));
    },
  });
};

export const useSingleVideo = (id) => {
  return useQuery({
    queryKey: [VIDEOS, id],
    queryFn: () => fetchSingleVideo(id),
  });
};

export const useTotalPictures = () => {
  return useQuery({
    queryKey: [IMAGES, "pictureTotal"],
    queryFn: () => fetchPicturesTotal(),
  });
};

export const useTotalVideos = () => {
  return useQuery({
    queryKey: [IMAGES, "videosTotal"],
    queryFn: () => fetchVideosTotal(),
  });
};

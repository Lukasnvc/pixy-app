import axios from "axios";

const URL = "https://pixabay.com/api/";
const URL_VIDEOS = "https://pixabay.com/api/videos/";
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchImages = (search, page, id) => {
  return axios
    .get(URL, { params: { key: apiKey, q: search, page: page, id: id } })
    .then((response) => response.data.hits)
    .catch((error) => {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      return [];
    });
};

export const fetchSingleImage = (id) => {
  return axios
    .get(URL, { params: { key: apiKey, id: id } })
    .then((response) => response.data.hits)
    .catch((error) => {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      return [];
    });
};

export const fetchVideos = (search, page) => {
  return axios
    .get(URL_VIDEOS, { params: { key: apiKey, q: search, page: page } })
    .then((response) => response.data.hits)
    .catch((error) => {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      return [];
    });
};

export const fetchSingleVideo = (id) => {
  return axios
    .get(URL_VIDEOS, { params: { key: apiKey, id: id } })
    .then((response) => response.data.hits)
    .catch((error) => {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      return [];
    });
};

export const fetchPicturesTotal = () => {
  return axios
    .get(URL, { params: { key: apiKey } })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      return [];
    });
};

export const fetchVideosTotal = () => {
  return axios
    .get(URL_VIDEOS, { params: { key: apiKey } })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      return [];
    });
};

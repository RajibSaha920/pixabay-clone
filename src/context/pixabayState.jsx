import PixabayContext from "./pixabayContext";
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const PixabayState = (props) => {
  const key = "56581511-8bc5f54941b0c22acf4a6f343";

  const [url, setUrl] = useState(
    `https://pixabay.com/api/?key=${key}&q=London&image_type=photo&per_page=100`
  );

  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
  } = useFetch(url);

  const fetchImageData = async (category) => {
    setUrl(
      `https://pixabay.com/api/?key=${key}&category=${category}&image_type=photo&per_page=40`
    );
  };

  const searchImages = (query) => {
    setUrl(
      `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&per_page=100`
    );
  };

  return (
    <PixabayContext.Provider
      value={{
        searchData,
        searchLoading,
        searchError,
        fetchImageData,
        searchImages,
      }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
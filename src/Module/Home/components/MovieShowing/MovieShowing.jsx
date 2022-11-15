
import { useRequest } from "../../../../App/Hooks/useRequest";
import movieAPIs from "../../../../App/Api/movieAPIs/movieAPIs";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tabs } from "antd";

import ContentShowing from "./ContentShowing";

const MovieShowing = () => {

  const {
    data: listMovies,
    isLoading,

  } = useRequest(() => movieAPIs.getMovies());
  const listMoviesSapChieu = listMovies?.filter((item) => {
    return item.dangChieu === true;
  });
  const listMoviesDangChieu = listMovies?.filter((item) => {
    return item.sapChieu === true;
  });

 const items = [
    { label: 'Đang chiếu', key: 'item-1', children: <ContentShowing itemMovie={listMoviesDangChieu} isLoading={isLoading}/> }, // remember to pass the key prop
    { label: 'Sắp chiếu', key: 'item-2', children: <ContentShowing itemMovie={listMoviesSapChieu} isLoading={isLoading}/>}
  ];
  return (
    <Tabs  className="movieShowing mt-5" defaultActiveKey="1" items={items} id="movieShowing" />
  );
};

export default MovieShowing;

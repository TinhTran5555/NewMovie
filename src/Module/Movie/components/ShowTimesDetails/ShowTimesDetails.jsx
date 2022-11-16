import { Tabs } from "antd";
import React from "react";

import { useRequest } from "../../../../App/Hooks/useRequest";
import movieAPIs from "../../../../App/Api/movieAPIs/movieAPIs";

import ListRap from "./ListRap";

const ShowTimesDetails = ({ movieId }) => {
  const {
    data: showTimes,
  } = useRequest(() => movieAPIs.getShowTimesDetails(movieId));

  const items = showTimes?.heThongRapChieu?.map((raps) => {
    return {
      label: <img src={raps.logo} className="rounded-full w-full h-full" />,
      key: raps.maHeThongRap,
      children: <ListRap listRaps={raps.cumRapChieu} />,
    };
  });
  return (
    <Tabs
      className="showTimeMovies mt-5"
      defaultActiveKey="1"
      items={items}
      id="showTimeMovies"
    />
  );
};
export default ShowTimesDetails;

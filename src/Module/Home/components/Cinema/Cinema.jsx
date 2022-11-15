import { Tabs } from "antd";
import React from "react";

import { useRequest } from "../../../../App/Hooks/useRequest";
import movieAPIs from "../../../../App/Api/movieAPIs/movieAPIs";


import ListPhim from "./ListMovie";

const Cinema = () => {

  const {
    data: cumraps,
   
  } = useRequest(() => movieAPIs.GetCumRapDetails());

  

  const items = cumraps?.map((raps) => {
    return ({ label: <img src={raps.logo}
     
      className="rounded-full w-full h-full" />, key: raps.maHeThongRap, children: <ListPhim listRaps={raps.lstCumRap}/> })
    
  });
  return (
    <Tabs id="cinema" className="Cinema mt-5" defaultActiveKey="1" items={items} />
  );
};
export default Cinema;

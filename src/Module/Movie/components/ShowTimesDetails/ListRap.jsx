import { Tabs } from "antd";
import React from "react";

import ShowTime from "./ShowTime";

const ListRap = ({ listRaps }) => {
  const items = listRaps?.map((listRap, index) => {
    return {
      label: (
        <div className=" flex">
          <img src={listRap.hinhAnh} className="rounded-full w-1/5 h-full" />
          <div className="text-left ml-2 whitespace-pre-wrap">
            {listRap.tenCumRap}

            <p className="text-emerald-500 whitespace-pre-wrap ">
              {listRap.diaChi}
            </p>
          </div>
        </div>
      ),
      key: index,
      children: <ShowTime ListLichChieu={listRap.lichChieuPhim} />,
    };
  });
  return (
    <Tabs
      className="CinemaList flex-row w-full"
      defaultActiveKey="1"
      items={items}
    />
  );
};

export default ListRap;



import { Tabs } from 'antd';
import React from 'react';

import CinemaShowTime from "./CinemaShowTime";

  
const ListMovie = ({listRaps}) => {


  
      const items = listRaps?.map((listRap ,index) => {
        return ( { label: 
         <div className=" flex text-sm sm:text-lg md:text-sm lg:text-lg" >
        <img
          src={listRap.hinhAnh}
          className="rounded-full w-1/5 h-full"
        />
        <div className="text-left ml-2 whitespace-pre-wrap">
          {listRap.tenCumRap}

          <p className="text-emerald-500 whitespace-pre-wrap ">
            {listRap.diaChi}
          </p>
        </div>
      </div>
      , key: index, children: <CinemaShowTime ListPhims={listRap.danhSachPhim} /> })
        
      }
      );
  return (
   
    <Tabs  className="CinemaList md:flex-row w-full" defaultActiveKey="1" items={items} />
  
  )
}

export default ListMovie
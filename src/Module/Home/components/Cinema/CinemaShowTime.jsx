import React, { Fragment} from 'react';

import moment from "moment";
import { useNavigate } from "react-router-dom";

const CinemaShowTime = ({ListPhims}) => {
  const navigate = useNavigate();
    const goToTicket = (ticketId) => {
        navigate(`/ticket/${ticketId}`);
      };
  return ( <Fragment>
    {ListPhims?.map((movie, index) => { 
        return (   
              <div key={index} className="flex item w-full">
                <div className="flex flex-col  w-2/5 md:w-1/3 h-full justify-around items-center overflow-hidden">
                <img
                  className=" rounded-xl"
                  src={movie.hinhAnh}
                  alt="hinhAnh"
                /><h1 className="text-xl text-green-700 h-fit">
                    {movie.tenPhim}
                  </h1></div>
                <div className="ml-2 flex flex-col w-full itemShowtime">
                  <div className="grid gap-3 grid-cols-2  lg:grid-cols-4 xl:grid-cols-6">
                    
                    {movie.lstLichChieuTheoPhim
                      ?.slice(0, 12)
                      .map((lichChieu, index) => {
                        return (
                          <button
                            onClick={() =>
                              goToTicket(lichChieu.maLichChieu)
                            }
                            className="text-xl text-green-400 no-underline border text-center rounded-md"
                            key={index}
                          >
                            {moment(
                              lichChieu.ngayChieuGioChieu
                            ).format("hh:mm A")}
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>
   
        );
      })}</Fragment>
  )
}

export default CinemaShowTime
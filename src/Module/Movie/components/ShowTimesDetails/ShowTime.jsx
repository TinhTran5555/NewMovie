import React, { Fragment, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const ShowTime = ({ ListPhims, ListLichChieu }) => {
  const navigate = useNavigate();
  const goToTicket = (ticketId) => {
    navigate(`/ticket/${ticketId}`);
  };

  return (
    <div className="flex justify-center">
      <div className="ml-2 flex flex-col w-11/12 itemShowtime ">
        <div
          className="grid gap-3 
               grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                   "
        >
          {ListLichChieu?.slice(0, 45).map((lichChieu, index) => {
            return (
              <button
                onClick={() => goToTicket(lichChieu.maLichChieu)}
                className="text-xl text-green-400 no-underline border text-center rounded-md"
                key={index}
              >
                {`${lichChieu.tenRap}: ${new Date(
                  lichChieu.ngayChieuGioChieu
                ).toLocaleString()}`}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowTime;

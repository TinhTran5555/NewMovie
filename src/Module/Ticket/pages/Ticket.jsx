import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getTicketDetailsThunk,
  removeAllTicketsAction,
  selectTicketAction,
  postTicketThunk,
} from "../slice/ticketsSlice";
import { ticketSelector, authSelector } from "../../../App/store";
import { CloseOutlined } from "@ant-design/icons";
import Loader from "../../../UI/Display/Loader/Loader";
import "./style.css";
import { Navigate } from "react-router-dom";
import { notification } from "antd";

const Ticket = () => {
  const { ticketId } = useParams();
  const dispatch = useDispatch();
    const { user } = useSelector(authSelector);

  
  const { tickets, isLoading } = useSelector(ticketSelector);

  const { selectedTicket } = useSelector(ticketSelector);
  

  const styleScreen = {
    color: "#fff",
    width: "90%",
    borderBottom: "50px solid rgb(255, 160, 100)",
    borderLeft: "50px solid transparent",
    borderRight: " 50px solid transparent",
    fontSize: "25px",
  };
  const handleSelect = (danhSachGhe) => {
    dispatch(selectTicketAction(danhSachGhe));
  };
  const handlePostTicket = () => {
    const maLichChieu = tickets.thongTinPhim.maLichChieu;
    const danhSachVe = selectedTicket;
    dispatch(
      postTicketThunk({ maLichChieu: maLichChieu, danhSachVe: danhSachVe })
    );
    dispatch(removeAllTicketsAction());
    dispatch(getTicketDetailsThunk(ticketId));
  };

  useEffect(() => {
    dispatch(getTicketDetailsThunk(ticketId));
  }, [ticketId]);
  
  if (!user) {
    notification.error({
      message: "Cần đăng nhập tài khoản",
    });
    return <Navigate to="/login" />
  }
  return (
    <div
      className="  ticket pb-5"
      style={{ backgroundColor: "#e3e9f3", borderRadius: "20px" }}
    >
      <div className="flex lg:flex-row  sm:flex-col justify-around">
        <div className="  lg:max-w-3xl flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mt-2 contentListGhe">
            <div className="text-3xl text-sky-700 font-bold mt-5">
              XIN MỜI CHỌN VÉ
            </div>
            <div className="text-black text-2xl mt-3">Màn hình</div>

            <div style={styleScreen}></div>
            {isLoading && (
              <div className="mt-32">
                {" "}
                <Loader />
              </div>
            )}
            {!isLoading && (
              <div className="flex mt-5 flex-row justify-center flex-wrap hienThiGhe ">
                {tickets?.danhSachGhe?.map((danhSachGhe, index) => {
                  let classGheVip =
                    danhSachGhe.loaiGhe === "Vip" ? "gheVip" : "";
                  let classGheDaDat =
                    danhSachGhe.daDat === true ? "gheDaDat" : "";
                  let classGheDangDat = "";
                  let indexGheDangDat = selectedTicket.findIndex(
                    (danhSachGheDangChon) =>
                      danhSachGheDangChon.maGhe === danhSachGhe.maGhe
                  );

                  if (indexGheDangDat !== -1) {
                    classGheDangDat = "gheDangChon";
                  }
                  return (
                    <Fragment key={index}>
                      <button
                        key={index}
                        disabled={danhSachGhe.daDat}
                        className={`gheChuaDat ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
                        onClick={() => handleSelect(danhSachGhe)}
                      >
                        {danhSachGhe.daDat ? (
                          <CloseOutlined className="flex items-center justify-center" />
                        ) : (
                          danhSachGhe.stt
                        )}
                      </button>
                      {(index + 1) % 16 === 0 ? <br /> : ""}
                    </Fragment>
                  );
                })}
              </div>
            )}
          </div>
          <div className="flex items-center justify-center flex-wrap chuThich sm:w-4/5 gap-y-1.5 mt-4">
            <span className="w-1/2 font-bold">Chú thích: </span>

            <span className="w-1/2 pl-2 flex justify-between">
              Ghế thường: <button className="gheChuaDat"></button>
            </span>
            <span className="w-1/2 flex justify-between">
              Ghế thường đã đặt:{" "}
              <button className="gheChuaDat  gheDaDat "></button>
            </span>
            <span className="w-1/2 pl-2 flex justify-between">
              Ghế Vip: <button className="gheChuaDat gheVip "></button>
            </span>

            <span className="w-1/2 flex justify-between">
              Ghế Vip đã đặt:{" "}
              <button className="gheChuaDat gheVip gheDaDat"></button>
            </span>
            <span className="w-1/2 pl-2 flex justify-between">
              Ghế ghế đang chọn:{" "}
              <button className="gheChuaDat  gheVip gheDangChon"></button>
            </span>
          </div>
        </div>
        <div className="relative  px-12  lg:pl-0 lg:pr-6 lg:mt-8">
          <div className="mb-20 lg:w-72 xl:w-80">
            <h3 className=" text-sky-700 text-2xl font-bold text-center mt-5 lg:mt-0">
              {" "}
              DANH SÁCH VÉ
            </h3>
            <hr />
            <h3 className="text-xl mt-2">{tickets?.thongTinPhim?.tenPhim}</h3>
            <p>
              Địa điểm: {tickets?.thongTinPhim?.tenCumRap} -{" "}
              {tickets?.thongTinPhim?.tenRap}
            </p>
            <p>
              Thời gian chiếu: {tickets?.thongTinPhim?.gioChieu} -{" "}
              {tickets?.thongTinPhim?.ngayChieu}
            </p>
            <hr className="mt-2" />
            <div className="flex flex-row my-5">
              <div className="w-3/5 grid grid-flow-row grid-cols-5 items-center flex-wrap">
                Ghế:{" "}
                {selectedTicket?.map((danhSachTenGheDangChon, index) => {
                  return (
                    <span
                      key={index}
                      className="text-black text-lg grid-cols-2  gap-2"
                    >
                      {" "}
                      {danhSachTenGheDangChon.tenGhe},{" "}
                    </span>
                  );
                })}
              </div>
              <div className="text-center w-2/5">
                <p className="text-green-800 text-lg">Tổng tiền:</p>{" "}
                <p>
                  {selectedTicket
                    .reduce((tongTien, danhSachTenGheDangChon) => {
                      return (tongTien += danhSachTenGheDangChon.giaVe);
                    }, 0)
                    .toLocaleString()}{" "}
                  Đ
                </p>
              </div>
            </div>
            <hr />
            <div className="my-4">
              <i>Tài khoản: </i>

              {user?.taiKhoan}
            </div>
            <div className="my-4">
              <i>Email: </i>

              {user?.email}
            </div>
            {user?.soDT ? (
              <div className="my-4">
                <i>Số điện thoại: </i>

                {user?.soDT}
              </div>
            ) : null}
          </div>
          <div className="absolute bottom-0 w-full ">
            <button className="buttonSubmit" onClick={handlePostTicket}>
              Đặt vé
            </button>
            <button
              style={{ marginLeft: "20px" }}
              className="buttonDel"
              onClick={() => {
                dispatch(removeAllTicketsAction());
              }}
            >
              {" "}
              Xoá toàn bộ ghế
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;

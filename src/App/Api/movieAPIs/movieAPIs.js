import axiosClient from "../axiosClient";
// import { ThongTinDatVe } from "modules/Ticket/reducer/ThongTinDatVe";
// const movieAPIs = {
//     getBanners: () => {
      
//     return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
//   },

//   getMovies: () => {
//     return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
//       params: {
//         maNhom: "GP02",
//       },
//     });
//   },

//   getMoviesPhim: (tenPhim) => {
//     if (!tenPhim) {
//       return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
//         params: {
//           maNhom: "GP02",
//         },
//       });
//     } else {
//       return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
//         params: {
//           maNhom: "GP02",
//           tenPhim: tenPhim,
//         },
//       });
//     }
//   },
//   getUser: (tuKhoa) => {
//     if (!tuKhoa) {
//       return axiosClient.get("QuanLyNguoiDung/LayDanhSachNguoiDung", {
//         params: {
//           maNhom: "GP02",
//         },
//       });
//     } else {
//       return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
//         params: {
//           maNhom: "GP02",
//           tuKhoa: tuKhoa,
//         },
//       });
//     }
//   },

//   getMovieDetails: (movieId) => {
//     return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
//       params: {
//         maPhim: movieId,
//       },
//     });
//   },
//   getShowTimesDetails: (movieId) => {
//     return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
//       params: {
//         maPhim: movieId,
//       },
//     });
//   },
//   getTicketDetails: (ticketId) => {
//     return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe", {
//       params: {
//         MaLichChieu: ticketId,
//       },
//     });
//   },

//   GetCumRapDetails: () => {
//     return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
//       params: {
//         maNhom: "GP02",
//       },
//     });
//   },
// //   DatVe: (thongTinDatVe = new ThongTinDatVe()) => {
// //     return axiosClient.post("QuanLyDatVe/DatVe", thongTinDatVe);
// //   },

//   addMovie: (values) => {
//     const formData = new FormData();

//     for (let key in values) {
//       formData.append(key, values[key]);
//     }
//     formData.append("maNhom", "GP02");

//     return axiosClient.post("QuanLyPhim/ThemPhimUploadHinh", formData);
//   },
//   addUser: (values) => {
//     return axiosClient.post("QuanLyNguoiDung/ThemNguoiDung", {
//       params: {
//         nd: values,
//       },
//     });
//   },

//   delMovie: (maPhim) => {
//     return axiosClient.delete("QuanLyPhim/XoaPhim", {
//       params: {
//         MaPhim: maPhim,
//       },
//     });
//   },

//   delUser: (taiKhoan) => {
//     return axiosClient.delete("QuanLyNguoiDung/XoaNguoiDung", {
//       params: {
//         taiKhoan: taiKhoan,
//       },
//     });
//   },
// };

// export default movieAPIs;
const movieAPIs = {
    getBanners: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },
  getMovies: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP07",
      },
    });
  },
  GetCumRapDetails: () => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom: "GP07",
      },
    });
  },
  getMovieDetails: (movieId) => {
    return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
  getShowTimesDetails: (movieId) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
  getTicketDetails: (ticketId) => {
    return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu: ticketId,
      },
    });
  },
  postTicket: (DanhSachVe) => {
    console.log(DanhSachVe);
    return axiosClient.post("QuanLyDatVe/DatVe", DanhSachVe);
  },

}
export default movieAPIs;
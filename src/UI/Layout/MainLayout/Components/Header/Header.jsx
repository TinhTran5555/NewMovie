// import Showtimes from "modules/Movie/components/Showtimes";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { logout } from "../../../../../Module/Auth/Slices/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieId, ticketId } = useParams();

  const goToNav = (link) => {
    navigate(`/${link}`);
  };
  const goToLogOut = () => {
    dispatch(logout());

    navigate("/");
  };
  const items = [
    {
      key: "1",
      label: (
        <>
          {movieId ? null : ticketId ? null : <a href="#movieShowing">phim</a>}{" "}
        </>
      ),
    },

    {
      key: "2",
      label: (
        <>
          {movieId ? (
            <a href="#showTimeMovies">Lịch chiếu</a>
          ) : ticketId ? null : (
            <a href="#cinema">Lịch chiếu</a>
          )}{" "}
        </>
      ),
    },
    {
      key: "3",
      label: <a href="#footer">Liên hệ</a>,
    },

    {
      key: "4",
      label: (
        <>
          {!user ? (
            <NavLink to="/login">Đăng Nhập</NavLink>
          ) : (
            <div className="flex items-center cursor-default">
              <FontAwesomeIcon className=" text-black" icon={faUser} />
              <p className="ml-4">{user?.hoTen}</p>
            </div>
          )}
        </>
      ),
    },
    {
      key: "5",
      label: (
        <>
          {!user ? (
            <NavLink to="/register">Đăng kí</NavLink>
          ) : (
            <button onClick={() => goToLogOut()}>Đăng xuất</button>
          )}
        </>
      ),
    },
  ];
  return (
    <div className="p-6 bg-opacity-40 bg-white text-black fixed w-full z-20 Header ">
      <div className=" flex justify-between items-center h-16 mx-auto ">
        <div className="w-1/5 h-5/6">
          <NavLink
            to="/"
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 h-full"
          >
            <img
              src="/Img/logo.jpg"
              alt="Cybershop.edu.vn"
              className="w-full h-full"
            />
          </NavLink>
        </div>

        {movieId ? (
          <ul className="w-1/3 h-full lg:flex items-center justify-around contentHeader hidden">
            <li>
              <a href="#showTimeMovies">Lịch chiếu</a>
            </li>
            <li>
              <a href="#footer">Liên hệ</a>
            </li>
          </ul>
        ) : ticketId ? (
          <ul className="w-1/3 h-full lg:flex items-center justify-around contentHeader hidden">
            <li>
              <a href="#footer">Liên hệ</a>
            </li>
          </ul>
        ) : (
          <ul className="w-1/3 h-full lg:flex items-center justify-around contentHeader hidden">
            <li>
              <a href="#movieShowing">Phim</a>
            </li>
            <li>
              <a href="#cinema">Lịch chiếu</a>
            </li>
            <li>
              <a href="#footer">Liên hệ</a>
            </li>
          </ul>
        )}

        {user ? (
          <div className="lg:flex items-center w-1/5 justify-between text-xl hidden ">
            {" "}
            <div className="flex items-center w-2/5 justify-end">
              <FontAwesomeIcon className="h-10 w-7 text-black" icon={faUser} />
              <p className="ml-4">{user?.hoTen}</p>
            </div>{" "}
            <button
              className="w-3/6 p-1 text-cyan-700 hover:bg-cyan-100 rounded-xl"
              onClick={() => goToLogOut()}
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <div className="lg:flex items-center w-1/5 justify-end text-xl hidden">
            <button
              className="w-4/12 p-1 text-cyan-700 hover:bg-cyan-100 ml-5 rounded-xl"
              onClick={() => goToNav("login")}
            >
              Đăng Nhập
            </button>
            <button
              className="w-4/12 p-1 text-cyan-700 hover:bg-cyan-100 ml-5 rounded-xl"
              onClick={() => goToNav("register")}
            >
              Đăng Ký
            </button>
          </div>
        )}

        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow
          className="lg:hidden"
        >
          <Button className="w-20 h-16">
            <FontAwesomeIcon className=" text-black" icon={faBars} />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;

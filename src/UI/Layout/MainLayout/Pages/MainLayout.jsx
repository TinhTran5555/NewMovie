import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <Fragment>
      <Header />
      <div className="h-28"></div>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Outlet />

        <Footer />
      </div>
    </Fragment>
  );
};

export default MainLayout;

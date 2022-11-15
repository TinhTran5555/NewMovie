import React from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <section className=" relative">
      <div className="backGroundAuth Auth">
        <Outlet />
      </div>
    </section>
  );
};

export default Auth;

import React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      <h1>Layout page</h1>
    </>
  );
};

export default Layout;
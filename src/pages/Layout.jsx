import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
  const location = useLocation();
  const showHeader = !location.pathname.includes("/create");

  return (
    <div>
      {showHeader && <Header />}
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

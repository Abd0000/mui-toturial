import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
const drawerWidth = 240;
const Root = () => {
  return (
    <div>
      <Navbar drawerWidth={drawerWidth}/>
      <Sidebar drawerWidth={drawerWidth}/>
      <Outlet />
    </div>
  );
};

export default Root;

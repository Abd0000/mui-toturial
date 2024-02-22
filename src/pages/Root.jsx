import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { Box } from "@mui/material";
const drawerWidth = 240;
const Root = () => {
  return (
    <div>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box className="border" sx={{ml:`${drawerWidth}px`}}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Root;

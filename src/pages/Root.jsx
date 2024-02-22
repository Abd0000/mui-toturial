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
      <Box  sx={{ml:`${drawerWidth}px`, display:"flex",alignItems:"center",justifyContent:"center",mt:"66px"}}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Root;

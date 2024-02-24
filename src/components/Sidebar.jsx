import {Drawer } from "@mui/material";
import React from "react";
import ListItems from "./ListItems";


const Sidebar = ({ drawerWidth, setMyMode }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          display:{
            xs:"none",
            md:"block"
          }
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <ListItems setMyMode={setMyMode} />
    </Drawer>
  );
};

export default Sidebar;

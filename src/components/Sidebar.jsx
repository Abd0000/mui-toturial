import {
  Divider,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import ListItems from "./ListItems";
import { DarkModeOutlined } from "@mui/icons-material";

const Sidebar = ({ drawerWidth }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      
      <IconButton
      size="small"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "64px",
          color: "primary.main",
        }}
      >
        <DarkModeOutlined fontSize="large"/>
      </IconButton>
      <Divider />
      <ListItems />
    </Drawer>
  );
};

export default Sidebar;

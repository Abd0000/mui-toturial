import { Drawer } from "@mui/material";
import React from "react";
import ListItems from "./ListItems";

const Sidebar = ({
  drawerWidth,
  setMyMode,
  noneOrBlock,
  permOrTemp,
  hidesidebar,
}) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          display: {
            xs: noneOrBlock,
            md: "block",
          },
        },
      }}
      variant={permOrTemp}
      anchor="left"
      open={true}
      onClose={() => {
        hidesidebar();
      }}
    >
      <ListItems setMyMode={setMyMode} />
    </Drawer>
  );
};

export default Sidebar;

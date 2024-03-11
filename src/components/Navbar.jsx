import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Navbar = ({ drawerWidth, showsidebar }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* using the Link component to create a link to the Home page */}
        <IconButton
          sx={{ mr: 2, display: { md: "none" } }}
          onClick={() => {
            showsidebar();
          }}
        >
          <Menu />
        </IconButton>
        <Link
          href="/"
          underline="none"
          color={"inherit"}
          flexGrow={1}
          sx={{
            "&:hover": { fontSize: "large" },
            width: `calc(100% - ${drawerWidth}px)`,
            ml: { xs: 0, md: `${drawerWidth}px` },
          }}
        >
          My Expenses
        </Link>

        <Typography variant="body1" color="inherit" mr={1}>
          NAME
        </Typography>
        <Avatar
          alt="Remy Sharp"
          src="./images\PhotoRoom-20231020_155127.png"
          sx={{ width: 50, height: 50 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

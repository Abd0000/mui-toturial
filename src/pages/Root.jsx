import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { Avatar, Link ,Typography,AppBar} from "@mui/material";

const Root = () => {
  return (
    <div>
      {/* // The AppBar component is a wrapper for the Toolbar component.
       The Toolbar component is a wrapper for the IconButton, Typography, and Button components.
        The IconButton component is a wrapper for the MenuIcon component.
         The Typography component is a wrapper for the h6 component.
          The Button component is a wrapper for the h6 component. */}
      <AppBar position="static">
        <Toolbar>
          {/* using the Link component to create a link to the Home page */}
          <Link
            href="/"
            underline="none"
            color={"inherit"}
            flexGrow={1}
            sx={{ ":hover": { fontSize: "large" } }}
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
      <Outlet />
    </div>
  );
};

export default Root;

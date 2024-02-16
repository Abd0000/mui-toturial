import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import { Link } from "@mui/material";

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
          <Link underline="none" color={"inherit"} flexGrow={1}>
            My Expenses
          </Link>

          <Button color="inherit">Login</Button>
        </Toolbar>

      </AppBar>
      <Outlet />
    </div>
  );
};

export default Root;

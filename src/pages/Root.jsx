import React from "react";
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ClearOutlined, MenuOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Root = () => {
  return (
    <div>
      <Typography
        className="header"
        gutterBottom={true}
        variant="h4"
        component={"p"}
      >
        {/* using the IconButton component to create a button with icon */}
        <IconButton size="large" sx={{position:"absolute" , top:"10px", left: "10px"}}>
          <MenuOutlined color="info" fontSize="large" />
        </IconButton>
        Header
      </Typography>
      {/* //using sx prop to style the typography component */}
      {/* using properties to style the typography like padding , width ,bgcolor and display */}
      <Typography 
        sx={{ p: "10px", width: "100%", ml: "20px auto", mr: "20px auto" }}
        p={"20px"}
        bgcolor={"grey.200"}
        display={"flex"}
        justifyContent={"center"}
        noWrap={false}
        variant="h6"
        component={"p"}
        color={"secondary.main"} //using theme color to style the typography and it will change according to the theme( light or dark)
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam vitae
        fugit voluptate nulla sunt. Nam in rem quisquam debitis inventore
        asperiores ad culpa tempora, modi veritatis officia, vel saepe possimus?
      </Typography>
      {/* using button element and using the endIcont and StartIcon */}
      <Button
        variant="contained"
        color="error"
        sx={{ ml: "auto", mr: "auto", display: "flex", mt: "10px" }}
        startIcon={<ClearOutlined />}
      >
        Delete
      </Button>

      <Outlet />
    </div>
  );
};

export default Root;

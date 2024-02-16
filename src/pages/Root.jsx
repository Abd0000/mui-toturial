import React from "react";
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Root = () => {
  return (
    <div>
      <Typography
        className="header"
        gutterBottom={true}
        variant="h4"
        component={"p"}
      >
        Header
      </Typography>
      {/* //using sx prop to style the typography component */}
      {/* using properties to style the typography like padding , width ,bgcolor and display */}
      <Typography
        sx={{ p: "10px", width: "100%" }}
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
      <Outlet />
    </div>
  );
};

export default Root;

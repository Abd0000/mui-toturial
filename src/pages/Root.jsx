import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, orange } from "@mui/material/colors";
const drawerWidth = 240;

//variable to get store the theme status and adding a new color to the theme (ochre)
// you can use this color in the theme.palette.ochre.main and so on

const Root = () => {
  const [mode, setMyMode] = useState(localStorage.getItem("mode") || "light"); //to get the theme status from the local storage
  const [noneOrBlock, setNoneOrBlock] = useState("none"); //to get the display status of the sidebar
  const [permOrTemp, setPermOrTemp] = useState("permanent"); //to get the display status of the sidebar

  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            bluee: {
              main: "#1E90FF",
              light: "#87CEFA",
              dark: "#00BFFF",
            },
            grey: {
              main: grey[300],
            },
          }
        : {
            // palette values for dark mode
            bluee: {
              main: orange[500],
              light: orange[300],
              dark: orange[700],
            },
            grey: {
              main: grey[800],
            },
          }),
    },
  });

  const showsidebar = () => {
    setNoneOrBlock("block");
    setPermOrTemp("temporary");
  };

  const hidesidebar = () => {
    setNoneOrBlock("none");
    setPermOrTemp("permanent");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Navbar drawerWidth={drawerWidth} showsidebar={showsidebar} />
        <Sidebar
          drawerWidth={drawerWidth}
          setMyMode={setMyMode}
          noneOrBlock={noneOrBlock}
          permOrTemp={permOrTemp}
          hidesidebar={hidesidebar}
        />
        <Box
          component={"main"}
          sx={{
            ml: { xs: 0, md: `${drawerWidth}px` },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "100px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;

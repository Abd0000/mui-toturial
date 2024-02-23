import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const drawerWidth = 240;

//variable to get store the theme status and adding a new color to the theme (ochre)
// you can use this color in the theme.palette.ochre.main and so on



const Root = () => {

  const [myMode, setMyMode] = useState(localStorage.getItem("mode") || "light"); //to get the theme status from the local storage

  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: myMode,
      // @ts-ignore
      bluee: {
        main: '#1E88E5',
        light: '#64B5F6',
        dark: '#0D47A1',
        contrastText: '#fff',
      },
    },
  
  });
  



  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} setMyMode={setMyMode}  />
      <Box  component={"main"} sx={{ml:`${drawerWidth}px`, display:"flex",alignItems:"center",justifyContent:"center",mt:"100px"}}>
        <Outlet />
      </Box>
    </div>
  </ThemeProvider>
  );
};

export default Root;

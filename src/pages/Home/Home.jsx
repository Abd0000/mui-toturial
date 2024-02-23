import React from "react";
import "./Home.css";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { ClearOutlined } from "@mui/icons-material";

const Home = () => {
  return (
    <Box>
      <Paper
        sx={{
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          p: "10px",
          mb: "20px",
          position: "relative",
        }}
      >
        <Typography sx={{ml:"16px",fontWeight:"5",fontSize:"1.3em"}} variant="h6">GYM</Typography>
        <Typography sx={{mr: "16px",fontSize:"1.3em",opacity:"0.8",fontWeight:"500"}} variant="h6">$100</Typography>
        <IconButton size="small" sx={{ position: "absolute", top: 0, right: 0}}>
          <ClearOutlined fontSize="inherit"/>
        </IconButton>
      </Paper>


      <Paper
        sx={{
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          p: "10px",
          position: "relative",
        }}
      >
        <Typography sx={{ml:"16px",fontWeight:"5",fontSize:"1.3em"}} variant="h6">GYM</Typography>
        <Typography sx={{mr: "16px",fontSize:"1.3em",opacity:"0.8",fontWeight:"500"}} variant="h6">$100</Typography>
        <IconButton size="small" sx={{ position: "absolute", top: 0, right: 0}}>
          <ClearOutlined fontSize="inherit"/>
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Home;

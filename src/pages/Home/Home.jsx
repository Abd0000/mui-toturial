import React, { useEffect, useState } from "react";
import "./Home.css";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { ClearOutlined } from "@mui/icons-material";

const Home = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setMydata(data));
  }, []);
  
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {mydata.map(item=>{
        return(
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
        <Typography
          sx={{ ml: "16px", fontWeight: "5", fontSize: "1.3em" }}
          variant="h6"
        >
         {item.title}
        </Typography>
        <Typography
          sx={{
            mr: "16px",
            fontSize: "1.3em",
            opacity: "0.8",
            fontWeight: "500",
          }}
          variant="h6"
        >
          ${item.amount}
        </Typography>
        <IconButton
          size="small"
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <ClearOutlined fontSize="inherit" />
        </IconButton>
      </Paper>

        )
      })}
    </Box>
  );
};

export default Home;

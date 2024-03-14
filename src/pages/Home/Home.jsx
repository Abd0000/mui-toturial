import React, { useEffect, useState } from "react";
import "./Home.css";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { ClearOutlined } from "@mui/icons-material";

const Home = () => {
  //storing the data from the server
  const [mydata, setMydata] = useState([]);

  //fetching the data from the server
  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setMydata(data));
  }, [mydata]);

  //total price of the items
  let totalPrice = 0;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {mydata.map((item) => {
        totalPrice += item.amount;
        return (
          <Paper
            key={item.id}
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
              onClick={() => {
                fetch(`http://localhost:3100/mydata/${item.id}`, {
                  method: "DELETE",
                });
              }}
              size="small"
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              <ClearOutlined fontSize="inherit" />
            </IconButton>
          </Paper>
        );
      })}
      <Typography  mt={2} variant="h6">spent 👉 $ {totalPrice}</Typography>
    </Box>
  );
};

export default Home;

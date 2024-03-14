import React, { useState } from "react";
import "./Create.css";
import { Box, InputAdornment, TextField, Button } from "@mui/material";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  return (
    <Box
    noValidate
    autoComplete="off"
      sx={{ display: "flex", flexDirection: "column", width: "366px" }}
      component={"form"}
    >
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label="Transaction"
        id="outlined-start-adornment"
        sx={{ mb: 1 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
      />

      <TextField
        onChange={(e) => setAmount(Number(e.target.value))}
        fullWidth
        label="Amount"
        id="outlined-start-adornment"
        sx={{ mb: 1 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />

      <Button
        onClick={(parms) =>
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, amount }),
          }).then(() => navigate("/"))
        }
        sx={{
          width: "80px",
          pl: "25px",
          backgroundColor: "bluee.main",
          "&:hover": { backgroundColor: "bluee.dark" },
        }}
        variant="contained"
      >
        Submit
        <KeyboardArrowRightOutlined />
      </Button>
    </Box>
  );
};

export default Create;

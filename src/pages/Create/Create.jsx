import React from "react";
import "./Create.css";
import { Box, InputAdornment, TextField, Button } from "@mui/material";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";

const Create = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", width: "366px" }}
      component={"form"}
    >
      <TextField
        fullWidth
        label="Transaction"
        id="outlined-start-adornment"
        sx={{ mb: 1 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
      />

      <TextField
        fullWidth
        label="Amount"
        id="outlined-start-adornment"
        sx={{ mb: 1 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />

      <Button
        sx={{
          width: "80px",
          pl: "25px",
          backgroundColor: "bluee.main",
          "&:hover": { backgroundColor: "bluee.dark" }
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

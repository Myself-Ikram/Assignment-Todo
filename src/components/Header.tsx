import React from "react";
import { Box } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        margin: -1,
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <TaskAltIcon
        sx={{
          backgroundColor: "white",
          boxShadow: 2,
          borderRadius: 5,
          fontSize: 35,
        }}
      />
      <Box
        component={"h1"}
        sx={{
          backgroundColor: "white",
          padding: 1,
          boxShadow: 2,
          borderRadius: 5,
        }}
      >
        Task Lists
      </Box>
    </Box>
  );
}

export default Header;

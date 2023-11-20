import React, { useState } from "react";
import { Box } from "@mui/material";
import LoupeIcon from "@mui/icons-material/Loupe";
import FormJSON from "./FormJSON";
function NewTopic({ addNewTopic }: any) {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {showForm ? (
        <FormJSON setShowForm={setShowForm} addNewTopic={addNewTopic} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            boxShadow: 1,
          }}
        >
          <p onClick={() => setShowForm(true)}>
            <LoupeIcon
              sx={{
                fontSize: 35,
                boxShadow: 2,
                borderRadius: 5,
                color: "",
              }}
            />
          </p>
        </Box>
      )}
    </>
  );
}

export default NewTopic;

import { Box } from "@mui/system";
import React from "react";

const ChoiceBtnDiv = ({children}) => {
  return (
    <Box
      sx={{
        p: 2,
        paddingTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 5,
      }}
    >
      {children}
    </Box>
  );
};

export default ChoiceBtnDiv;

import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import backgroundImage from "../components/images/robustCatus.webp";

const Quiz = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        marginTop: "112px",
        height: "calc(100vh - 112px)",
      }}
    >
      <Box
        sx={{
          margin: "10px",
          position: "fixed",
          borderRadius: "0 10rem 0 0",
          overflow: "hidden",
          minWidth: "100wv",
          height: "60vh",
        }}
      >
        <Box
          component="img"
          src={backgroundImage}
          alt="Catus"
          sx={{
            objectFit: "cover",
            width: "100%",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage:
            "linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 0) 100%)",
          position: "absolute",
          bottom: "50px",
          left: 0,
          padding: "10vw",
          paddingTop: "50px",
          width: "80vw",
        }}
      >
        <Typography variant="h1" textAlign="left" lineHeight={1.3}>
          Looking for something robust, and can hold it's own?
        </Typography>
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
          <Button
            variant="contained"
            color="third"
            sx={{
              flex: 1,
              borderRadius: "100px",
              color: "white",
              textTransform: "none",
            }}
          >
            meh
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ flex: 1, borderRadius: "100px", textTransform: "none" }}
          >
            gimme
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Quiz;

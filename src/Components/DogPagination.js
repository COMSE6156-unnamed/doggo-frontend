import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bbdefb",
    },
  },
});

export default function DogPagination({
  handleClickPrev,
  handleClickNext,
  disablePrev,
  disableNext,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <Fab variant="extended" color="primary" onClick={handleClickPrev}>
          <ArrowCircleLeftIcon sx={{ mr: 1 }} />
          Previous
        </Fab>

        <Fab variant="extended" color="primary" onClick={handleClickNext}>
          <ArrowCircleRightIcon sx={{ mr: 1 }} />
          Next
        </Fab>
      </Box>
    </ThemeProvider>
  );
}

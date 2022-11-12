import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
        <Button onClick={handleClickPrev} disabled={disablePrev}>
          <Fab variant="extended" color="primary">
            <ArrowCircleLeftIcon sx={{ mr: 1 }} />
            Previous
          </Fab>
        </Button>
        <Button onClick={handleClickNext} disabled={disableNext}>
          <Fab variant="extended" color="primary">
            <ArrowCircleRightIcon sx={{ mr: 1 }} />
            Next
          </Fab>
        </Button>
      </Box>
    </ThemeProvider>
  );
}

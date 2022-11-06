import * as React from "react";

import DogInfoListItem from "./DogInfoListItem";
import Stack from "@mui/material/Stack";
import dogConstants from "../constants/dogConstants";

export default function DogInfo({ categories, origins, size }) {
  return (
    <Stack
      sx={{
        maxHeight: "100%",
        maxWidth: "100%",
        bgcolor: "background.paper",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
      }}
      spacing={4}
    >
      <DogInfoListItem itemName={dogConstants.categoryTitle} items={categories} /> 
      <DogInfoListItem itemName={dogConstants.originTitle} items={origins} />
      <DogInfoListItem itemName={dogConstants.sizeTitle} items={size} />
    </Stack>
  );
}

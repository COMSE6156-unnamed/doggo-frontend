import { React, useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import CategoryIcon from "@mui/icons-material/Category";
import Chip from "@mui/material/Chip";
import DogInfoMultiChipsStack from "./DogInfoMultiChipsStack";
import HouseIcon from "@mui/icons-material/House";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import Stack from "@mui/material/Stack";
import dogConstants from "../constants/dogConstants";

export default function DogInfoListItem({ itemName, items }) {
  return (
    <ListItem sx={{ display: "flex" }}>
      <ListItemAvatar>
        <Avatar>
          {itemName == dogConstants.categoryTitle && <CategoryIcon />}
          {itemName == dogConstants.originTitle && <HouseIcon />}
          {itemName == dogConstants.sizeTitle && <OpenInFullIcon />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={itemName} />
      {(itemName == dogConstants.categoryTitle ||
        itemName == dogConstants.originTitle) && (
        <DogInfoMultiChipsStack items={items} />
      )}
      {itemName == dogConstants.sizeTitle && (
        <Stack flexDirection={"row"}>
          <Chip label={items.name} />
        </Stack>
      )}
    </ListItem>
  );
}

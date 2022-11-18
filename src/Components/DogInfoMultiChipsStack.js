import * as React from "react";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function DogInfoMultiChipsStack ({items}) {
    return (
        <Stack justifyContent="space-between" flexDirection={"row-reverse"} width="50%" flexWrap="wrap" textAlign="right" >
          {items && items.map((item) => <Chip key={item.id} label={item.name} />)}
        </Stack>
    )
}

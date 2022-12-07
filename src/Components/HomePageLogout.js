import { React, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import commonConstants from "../constants/commonConstants";
import commonStyle from "../css/commonStyle";
import { logout } from "../utils/logout";

export default function HomePageLoggedIn() {
  return (
    <Card>
      <CardMedia component="img" image={commonConstants.dogeWeeeImageSrc} />
      <CardContent sx={{justifyContent: 'center', display:'flex', flexDirection: 'column'}}>
        <CardHeader title={"You are logged in!!!"} />
        <Button size="large" variant="outlined" onClick={logout}>Don't you dare to log out</Button>
      </CardContent>
    </Card>
  );
}

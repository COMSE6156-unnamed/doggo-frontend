import { React, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import commonConstants from "../constants/commonConstants";
import commonStyle from "../css/commonStyle";
import { login } from "../utils/login";

export default function HomePageLogin() {
  return (
    <Card px={3} >
      <CardMedia component="img" image={commonConstants.dogeSadImageSrc} />
      <CardContent sx={{justifyContent: 'center', display:'flex', flexDirection: 'column'}}>
        <CardHeader title={"You are not logged in. Log in to be pawesome!!!"} />
        <Button size="large" variant="outlined" onClick={login}>Login</Button>
      </CardContent>
    </Card>
  );
}
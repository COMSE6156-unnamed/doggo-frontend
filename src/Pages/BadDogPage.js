import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import { React } from "react";
import commonConstants from "../constants/commonConstants";
import commonStyle from "../css/commonStyle";
import { login } from "../utils/login";

function BadDogPage() {
  return (
    <Container maxWidth={false} sx={commonStyle.pageContainerStyle}>
      <Card px={3} >
      <CardMedia component="img" image={commonConstants.badDogeImageSrc} />
      <CardContent sx={{justifyContent: 'center', display:'flex', flexDirection: 'column'}}>
        <CardHeader title={"You are trying to access a page that you don't have access to. You are a bad doggo 😡😡😡😡😡"} />
        <Button size="large" variant="outlined" onClick={login}>Login</Button>
      </CardContent>
    </Card>
    </Container>
  );
}

export default BadDogPage;

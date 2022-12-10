import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { React } from "react";
import commonConstants from "../constants/commonConstants";
import { logout } from "../utils/logout";

export default function HomePageLoggedIn() {
  return (
    <Card>
      <CardMedia component="img" image={commonConstants.weeeDogeImageSrc} />
      <CardContent sx={{justifyContent: 'center', display:'flex', flexDirection: 'column'}}>
        <CardHeader title={"You are logged in!!!"} />
        <Button size="large" variant="outlined" onClick={logout}>Log out to be not pawesome again</Button>
      </CardContent>
    </Card>
  );
}

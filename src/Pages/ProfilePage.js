import { React, useEffect, useState } from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardOverflow from "@mui/joy/CardOverflow";
import { ConstructionOutlined } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/material/Typography";
import commonConstants from "../constants/commonConstants";
import commonStyle from "../css/commonStyle";
import { httpCall } from "../utils/httpCall";
import jwt_decode from "jwt-decode";

function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState(false);
  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const getUserInfo = async () => {
    const allCookies = Cookies.get();
    if (allCookies.id_token) {
      const decoded = jwt_decode(allCookies.id_token);
      console.log("decoded");
      console.log(decoded);
      setEmail(decoded.email);
      setName(decoded.name);
      setPictureUrl(decoded.picture);
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Container maxWidth={false} sx={commonStyle.pageContainerStyle}>
      <Card
        sx={{
          width: 320,
        }}
      >
        <AspectRatio ratio="1" sx={{ padding: 5 }}>
          <img src={pictureUrl} loading="lazy" alt="" />
        </AspectRatio>
        <CardContent
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: 0
          }}
        >
          <CardHeader title={name} px={2}/>
          <Typography variant="body2" color="text.secondary" px={3}>
            Email: {email}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProfilePage;

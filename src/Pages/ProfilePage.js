import { React, useEffect, useState } from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import Typography from "@mui/material/Typography";
import commonStyle from "../css/commonStyle";
import jwt_decode from "jwt-decode";

function ProfilePage() {
  const [email, setEmail] = useState(false);
  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const getUserInfo = async () => {
    const allCookies = Cookies.get();
    if (allCookies.id_token) {
      const decoded = jwt_decode(allCookies.id_token);
      setEmail(decoded.email);
      setName(decoded.name);
      setPictureUrl(decoded.picture);
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

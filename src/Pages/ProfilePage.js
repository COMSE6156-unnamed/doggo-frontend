import { Navigate, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import Typography from "@mui/material/Typography";
import { common } from "@mui/material/colors";
import commonConstants from "../constants/commonConstants";
import { httpCall } from "../utils/httpCall";
import jwt_decode from "jwt-decode";
import userConstants from "../constants/userConstants";

function ProfilePage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState(false);
  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [scoreUrl, setScoreUrl] = useState(commonConstants.sadDogeImageSrc);
  const getUserInfo = async () => {
    const allCookies = Cookies.get();
    if (allCookies.id_token) {
      const decoded = jwt_decode(allCookies.id_token);
      setEmail(decoded.email);
      setName(decoded.name);
      setPictureUrl(decoded.picture);
      
      const response = await httpCall(
        `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/user/${decoded.sub}/quiz/avg_score`
      );
      if (response.avg_scores.length > 0) {
        const scoreString = response.avg_scores.join(",");
        const quizIdString = response.quiz_ids.join(",");
        const scoreUrlCopy = `${userConstants.scoreAPIEndpoint}?data1=${scoreString}&labels=${quizIdString}`;
        setScoreUrl(scoreUrlCopy);
      }
    } else {
      return navigate(commonConstants.badDogRoute);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const score_exist = scoreUrl != commonConstants.sadDogeImageSrc;
  const quiz_history_title = score_exist ? "Average Score"
                                         : "No quiz history. You are just a potato 😔" ;
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "30px",
        backgroundColor: "#E5E4E2",
        boxShadow: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Card
        sx={{
          width: "25%",
          marginRight: 3,
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
            paddingTop: 0,
          }}
        >
          <CardHeader title={name} px={2} />
          <Typography variant="body2" color="text.secondary" px={3}>
            Email: {email}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ width: "75%" }}>

        <CardHeader title={quiz_history_title} sx={{ paddingTop: 5, paddingRight: 5, paddingLeft: 5, paddingBottom: 2 }} />

        <AspectRatio ratio={score_exist ? "16/9" : "1"} sx={{ margin: 5 }}>
          <img src={scoreUrl} alt="" />
        </AspectRatio>

        <CardContent
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: 0,
          }}
        ></CardContent>
      </Card>
    </Container>
  );
}

export default ProfilePage;

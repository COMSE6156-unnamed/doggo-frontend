import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import { React } from "react";
import commonConstants from "../constants/commonConstants";
import quizPageStyle from "../css/quizPageStyle";

export default function ScoreCard({ score }) {
  return (
    <Card row sx={quizPageStyle.questionCardStyle}>
      {score >= 50 && (
        <Box sx={{ display: "flex", width: "100%" }}>
          <AspectRatio ratio="1.4" sx={{ width: 400 }}>
            <img
              src={commonConstants.weeeDogeImageSrc}
              alt={commonConstants.dogeImageSrc}
            />
          </AspectRatio>
          <Card sx={{ bgcolor: "#bdebff", marginLeft: 3, width: "100%" }}>
            <Card>
              <h1>Your Score: {score}</h1>
              <h3>
                You are pawesome!!! <span role="img">😎🤓😎🤓😎</span>
              </h3>
            </Card>
          </Card>
        </Box>
      )}
      {score < 50 && (
        <Box sx={{ display: "flex", width: "100%" }}>
          <AspectRatio ratio="1" sx={{ width: 400 }}>
            <img
              src={commonConstants.sadDogeImageSrc}
              alt={commonConstants.dogeImageSrc}
            />
          </AspectRatio>

          <Card sx={{ bgcolor: "#bdebff", marginLeft: 3, width: "100%" }}>
            <Card>
              <h1>Your Score: {score}</h1>
              <h3>
                You are not a good boi <span role="img">😡😡😡😡😡</span>
              </h3>
            </Card>
          </Card>
        </Box>
      )}
    </Card>
  );
}

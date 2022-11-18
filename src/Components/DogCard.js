import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import DogInfo from "./DogInfo";
import ReactAudioPlayer from "react-audio-player";
import commonConstants from "../constants/commonConstants";
import dogPageStyle from "../css/dogPageStyle";
import isValidHttpUrl from "../utils/isValidHttpUrl";

export default function DogCard({ dog }) {
  return (
    <Card sx={dogPageStyle.dogCardStyle.dogCard}>
      <CardMedia
        component="img"
        image={isValidHttpUrl(dog.image_url) ? dog.image_url : commonConstants.dogeImageSrc}
        sx={dogPageStyle.dogCardStyle.dogCardMedia}
      />

      <CardContent sx={dogPageStyle.dogCardStyle.dogCardContent}>
        <CardHeader
          titleTypographyProps={dogPageStyle.dogCardStyle.dogCardHeaderTitle}
          title={dog.name}
        />
        {isValidHttpUrl(dog.pronunciation_url) && (
          <ReactAudioPlayer
            src={dog.pronunciation_url}
            controls
            style={{ marginLeft: "14px" }}
          />
        )}

        <DogInfo
          categories={dog.categories}
          origins={dog.origins}
          size={dog.size}
        />
      </CardContent>
    </Card>
  );
}

import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import DogCard from "../Components/DogCard";
import apiRoutes from "../constants/apiRoutes";
import commonStyle from "../css/commonStyle";
import { httpCall } from "../utils/httpCall";

function DogPage() {
  const [dogs, setDogs] = useState([]);
  const getDogs = async () => {
    let response = await httpCall(
      apiRoutes.getAllDogs,
      "GET",
      null,
      null
    );
    setDogs(response);
  };

  useEffect(() => {
    console.log(`${process.env.REACT_APP_DOGINFO_API_HOST}`)
    getDogs();
  }, []);
  return (
    <Container maxWidth={false} sx={commonStyle.pageContainerStyle}>
      {dogs && dogs.map((dog) => <DogCard dog={dog} />)}
    </Container>
  );
}

export default DogPage;

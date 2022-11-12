import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import DogCard from "../Components/DogCard";
import DogPagination from "../Components/DogPagination";
import apiRoutes from "../constants/apiRoutes";
import commonStyle from "../css/commonStyle";
import dogConstants from "../constants/dogConstants";
import { httpCall } from "../utils/httpCall";

const queryString = require("query-string");

function DogPage() {
  const [dogs, setDogs] = useState([]);
  const [prevLink, setPrevLink] = useState(null);
  const [nextLink, setNextLink] = useState(null);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(false);

  const getDogs = async () => {
    const response = await httpCall(apiRoutes.getAllDogs, "GET", null, null);
    setDogs(response.data);
    setPrevLink(response.links.prev.href);
    setNextLink(response.links.next.href);

    const cOffset = getOffset(response.links.curr.href);
    if (cOffset == 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }

    if (response.data.length < dogConstants.defaultPageSize) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  };

  const handleClickPrev = async () => {
    const response = await httpCall(prevLink, "GET", null, null);
    setDogs(response.data);
    setPrevLink(response.links.prev.href);
    setNextLink(response.links.next.href);

    const cOffset = getOffset(response.links.curr.href);
    if (cOffset == 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }

    if (response.data.length < dogConstants.defaultPageSize) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  };

  const handleClickNext = async () => {
    const response = await httpCall(nextLink, "GET", null, null);
    setDogs(response.data);
    setPrevLink(response.links.prev.href);
    setNextLink(response.links.next.href);
    
    const cOffset = getOffset(response.links.curr.href);
    
    if (cOffset == 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }

    if (response.data.length < dogConstants.defaultPageSize) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  };

  const getOffset = (hrefLink) => {
    let qs = hrefLink.substring(hrefLink.indexOf("?") + 1);
    let parsed = queryString.parse(qs);
    return parsed.offset ? parsed.offset : 0;
  };

  useEffect(() => {
    getDogs();
  }, []);
  return (
    <Container maxWidth={false} sx={commonStyle.pageContainerStyle}>
      {dogs && dogs.map((dog) => <DogCard dog={dog} />)}
      <Container>
        <DogPagination
          handleClickPrev={handleClickPrev}
          handleClickNext={handleClickNext}
          disablePrev={disablePrev}
          disableNext={disableNext}
        />
      </Container>
    </Container>
  );
}

export default DogPage;

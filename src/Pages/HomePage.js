import {React, useEffect, useState} from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import HomePageLogin from "../Components/HomePageLogin";
import HomePageLogout from "../Components/HomePageLogout";
import commonStyle from "../css/commonStyle";

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkIsLoggedIn = async () => {
    const allCookies = Cookies.get();
    console.log('allCookies', allCookies)
    console.log('allCookies.id_token', allCookies.id_token)
    if (allCookies.id_token) {
      console.log('checkIsLoggedIn');
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    checkIsLoggedIn();
  }, []);  

  return (
    <Container maxWidth={false} sx={commonStyle.pageContainerStyle}>
        {!isLoggedIn && (<HomePageLogin />)}
        {isLoggedIn && (
          <HomePageLogout />
        )}
    </Container>
  );
}

export default HomePage;

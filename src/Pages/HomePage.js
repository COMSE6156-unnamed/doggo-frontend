import { React, useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import HomePageLogin from "../Components/HomePageLogin";
import HomePageLogout from "../Components/HomePageLogout";
import commonStyle from "../css/commonStyle";

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkIsLoggedIn = async () => {
    const allCookies = Cookies.get();
    if (allCookies.id_token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  return (
    <Container maxWidth={false} sx={commonStyle.pageContainerStyle}>
      {!isLoggedIn && <HomePageLogin />}
      {isLoggedIn && <HomePageLogout />}
    </Container>
  );
}

export default HomePage;

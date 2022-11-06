import Container from "@mui/material/Container";
import React from 'react';
import commonStyle from "../css/commonStyle";

function HomePage() {
  return (
    <Container maxWidth={false} sx={commonStyle.pageContainerStyle}>
        Home Page
    </Container>
  );
}

export default HomePage;

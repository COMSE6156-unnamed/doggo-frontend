import "../css/common.css";

import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import commonConstants from "../constants/commonConstants";
import navbarStyle from "../css/navbarStyle";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Navbar() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky" theme={darkTheme} >
        <Container maxWidth={false} disableGutters display="flex">
          <Toolbar disableGutters>
            <Button href={commonConstants.rootRoute} sx={navbarStyle.dogeButton}>
              <Avatar
                src={commonConstants.dogeImageSrc}
              />
            </Button>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href={commonConstants.rootRoute}
              sx={navbarStyle.leetdoge}
            >
              LeetDoge
            </Typography>
            <Box sx={navbarStyle.tabBox}>
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Doggo" to={commonConstants.dogRoute} component={Link} onClick={() => window.location.reload()} />
                <Tab label="Quiz" to={commonConstants.quizRoute} component={Link} />
              </Tabs>
            </Box>
            <IconButton sx={navbarStyle.profileButton}>
              <Link to={commonConstants.profileRoute} >
                <AccountCircle />
              </Link>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;

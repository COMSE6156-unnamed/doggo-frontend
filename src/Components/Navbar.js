import "../css/common.css";

import { React, useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import CreateDogPage from "../Pages/CreateDogPage";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import commonConstants from "../constants/commonConstants";
import { login } from "../utils/login";
import { logout } from "../utils/logout";
import navbarStyle from "../css/navbarStyle";
import { useLocation } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Navbar() {
  let location = useLocation();
  const currentTab = () => {
    let path = location.pathname;
    if (path === commonConstants.dogRoute) return 0;
    else if (path === commonConstants.quizRoute) return 1;
    else return 2;
  };
  const [value, setValue] = useState(currentTab);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickDoggo = (event, newValue) => {
    setValue(currentTab);
    window.location.href = commonConstants.dogRoute;
  };

  const handleClickQuiz = (event, newValule) => {
    setValue(currentTab);
    window.location.href = commonConstants.quizRoute;
  };

  const checkIsLoggedIn = async () => {
    const allCookies = Cookies.get();
    if (allCookies.id_token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky" theme={darkTheme}>
        <Container maxWidth={false} disableGutters display="flex">
          <Toolbar disableGutters>
            <Button
              href={commonConstants.rootRoute}
              sx={navbarStyle.dogeButton}
            >
              <Avatar src={commonConstants.dogeImageSrc} />
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
              <Tabs value={value}>
                <Tab
                  label="Doggo"
                  to={commonConstants.dogRoute}
                  component={Link}
                  onClick={handleClickDoggo}
                />
                {isLoggedIn && (
                  <Tab
                    label="Quiz"
                    to={commonConstants.quizRoute}
                    component={Link}
                    onClick={handleClickQuiz}
                  />
                )}
              </Tabs>
            </Box>
            {isLoggedIn && (
              <div>
                <IconButton sx={navbarStyle.profileButton} onClick={handleMenu}>
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to={commonConstants.profileRoute}>Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to={commonConstants.createDogRoute}>Create Dog</Link>
                  </MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
            {!isLoggedIn && (
              <Button onClick={login} sx={{ marginRight: 3 }}>
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;

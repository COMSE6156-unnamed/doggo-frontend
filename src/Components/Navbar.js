import * as React from "react";
import "../css/common.css";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Navbar() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" theme={darkTheme}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              alt="Remy Sharp"
              src="/img/doge.png"
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "arial",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LeetDoge
            </Typography>
            <Box sx={{ flexGrow: 6 }}>
              <Tabs
                value={value}
                onChange={handleChange}
              >
                <Tab label="Doggo" to="/dog" component={Link} />
                <Tab label="Quiz" to="/quiz" component={Link} />
              </Tabs>
            </Box>
            <IconButton>
              <Link to="/profile">
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

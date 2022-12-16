import { Navigate, useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import apiRoutes from "../constants/apiRoutes";
import commonConstants from "../constants/commonConstants";
import commonStyle from "../css/commonStyle";
import { httpCall } from "../utils/httpCall";
import jwt_decode from "jwt-decode";

function CreateDogPage() {
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null); // To be changed after login branch is merged
  const [categories, setCategories] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [sizes, setSizes] = useState([]);

  const [dogName, setDogName] = useState("");
  const [dogCategory, setDogCategory] = useState(null);
  const [dogOrigin, setDogOrigin] = useState(null);
  const [dogSize, setDogSize] = useState(null);
  const [dogImageUrl, setDogImageUrl] = useState("https://coms6156-dog-data.s3.amazonaws.com/images/labrador_retriever.jpg");

  const getUserId = async () => {
    const allCookies = Cookies.get();
    if (allCookies.id_token) {
      const decoded = jwt_decode(allCookies.id_token);
      setUserId(decoded.sub);
    } else {
      return navigate(commonConstants.badDogRoute);
    }
  };

  const getCategories = async () => {
    const response = await httpCall(apiRoutes.getCategories, "GET", null, null);
    setCategories(response);
  };

  const getOrigins = async () => {
    const response = await httpCall(apiRoutes.getOrigins, "GET", null, null);
    setOrigins(response);
  };

  const getSizes = async () => {
    const response = await httpCall(apiRoutes.getSizes, "GET", null, null);
    setSizes(response);
  };

  const onChangeName = (event) => {
    setDogName(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setDogCategory(event.target.value);
  };

  const handleOriginChange = (event) => {
    setDogOrigin(event.target.value);
  };

  const handleSizeChange = (event) => {
    setDogSize(event.target.value);
  };

  const constructInput = () => {
    var input = 
      `{\"data\":{\"name\":\"${dogName}\",\"size_ids\":[\"${dogSize}\"],\"origin_ids\":[\"${dogOrigin}\"],\"category_ids\":[\"${dogCategory}\"],\"image_url\":\"${dogImageUrl}\"},\"user_id\":\"${userId}\"}`
    return input;
  }

  const handleSubmit = async (event) => {
    if (dogName.length==0 || !dogSize || !dogOrigin || !dogCategory) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something is missing...",
      });
      return;
    }

    const newDoggo = {
      name: dogName,
      size_ids: [dogSize],
      origin_ids: [dogOrigin],
      category_ids: [dogCategory],
      image_url: dogImageUrl,
      pronunciation_url: "null"
    };
    
    const inputString = constructInput();
    console.log(inputString)
    const reqBody = {
      "input": inputString,
      "stateMachineArn": "arn:aws:states:us-east-1:957065417309:stateMachine:UserCreatesDog"
    }
    const response = await httpCall(apiRoutes.createDog, "POST", null, reqBody);
    console.log('response', JSON.stringify(response));
    if (response.error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.error.message,
      });
    } else if (response.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.message,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Weeeeee",
        text: "Successfully created a new doggo!",
      });
    }
  };

  useEffect(() => {
    getUserId();
    getCategories();
    getOrigins();
    getSizes();
  }, []);

  return (
    <Container maxWidth={false} sx={commonStyle.pageContainerStyle}>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <CardHeader title={"Create a new doggo!"} />
          <Box p={2}>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Dog Name"
              value={dogName}
              onChange={onChangeName}
            />
          </Box>
          <Box p={2}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={dogCategory}
                label="Category"
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box p={2}>
            <FormControl fullWidth>
              <InputLabel>Origin</InputLabel>
              <Select
                value={dogOrigin}
                label="Origin"
                onChange={handleOriginChange}
              >
                {origins.map((origin) => (
                  <MenuItem key={origin.id} value={origin.id}>
                    {origin.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box p={2}>
            <FormControl fullWidth>
              <InputLabel>Size</InputLabel>
              <Select value={dogSize} label="Size" onChange={handleSizeChange}>
                {sizes.map((size) => (
                  <MenuItem key={size.id} value={size.id}>
                    {size.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box p={2}>
            <Button
              onClick={handleSubmit}
              variant="outlined"
              sx={{ width: "100%" }}
            >
              Create Doggo Weeeee!
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CreateDogPage;

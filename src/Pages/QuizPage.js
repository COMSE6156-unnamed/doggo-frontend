import { React, useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import Fab from "@mui/material/Fab";
import PetsIcon from "@mui/icons-material/Pets";
import Question from "../Components/Question";
import ScoreCard from "../Components/ScoreCard";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";
import apiRoutes from "../constants/apiRoutes";
import commonConstants from "../constants/commonConstants";
import commonStyle from "../css/commonStyle";
import { httpCall } from "../utils/httpCall";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bbdefb",
    },
  },
});

function QuizPage() {
  const quizNum = 5; // TODO
  let navigate = useNavigate();
  const [userId, setUserId] = useState(null); // To be changed after login branch is merged
  const [quizId, setQuizId] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [userAnswer, setUserAnswer] = useState(new Map());

  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(null);
  const [submitResponse, setSubmitResponse] = useState(null);

  const getQuiz = async () => {
    const qid = Math.floor(Math.random() * quizNum) + 1;
    const path = apiRoutes.quizBasePath + "/" + qid;
    const response = await httpCall(path, "GET", null, null);
    setQuiz(response);
    setQuizId(qid);
    setUserAnswer(new Map());

    setShowAnswer(false);
    setScore(null);
  };

  const getUserId = async () => {
    const allCookies = Cookies.get();
    if (allCookies.id_token) {
      const decoded = jwt_decode(allCookies.id_token);
      setUserId(decoded.sub);
    } else {
      return navigate(commonConstants.badDogRoute);
    }
  };

  const handleSubmit = async (event) => {
    if (userAnswer.size != quiz.length) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bad doggo! Complete all the questions before submitting!",
      });
      return;
    }
    var userAnswersReqBody = {};
    userAnswer.forEach((value, key) => {
      userAnswersReqBody[key] = value;
    });
    const userTakeQuizPath = `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/user/${userId}/quiz/${quizId}`;
    const response = await httpCall(
      userTakeQuizPath,
      "POST",
      null,
      userAnswersReqBody
    );
    setScore(response.score);
    setShowAnswer(true);
    setSubmitResponse(response);
  };

  useEffect(() => {
    getUserId();
    getQuiz();
  }, []);
    return (
      <Container maxWidth={false} sx={commonStyle.pageContainerStyle}>
        <Stack spacing={2}>
          {showAnswer && <ScoreCard score={score} />}
          {quiz &&
            quiz.map((question) => (
              <Question
                key={question.question_id}
                question={question}
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
                showAnswer={showAnswer}
                submitResponse={
                  submitResponse ? submitResponse[question.question_id] : null
                }
              />
            ))}
        </Stack>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              position: "fixed",
              bottom: 20,
              right: 20,
            }}
          >
            {!showAnswer && (
              <Fab variant="extended" color="primary" onClick={handleSubmit}>
                <PetsIcon sx={{ mr: 1 }} />
                Submit
              </Fab>
            )}
          </Box>
        </ThemeProvider>
      </Container>
    );
}

export default QuizPage;

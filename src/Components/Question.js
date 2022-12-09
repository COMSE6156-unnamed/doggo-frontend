import { React, useEffect, useState } from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TypographyJoy from "@mui/joy/Typography";
import commonConstants from "../constants/commonConstants";
import { httpCall } from "../utils/httpCall";
import isValidHttpUrl from "../utils/isValidHttpUrl";
import quizPageStyle from "../css/quizPageStyle";

export default function Question({
  question,
  userAnswer,
  setUserAnswer,
  showAnswer,
  submitResponse,
}) {
  const [imageUrl, setImageUrl] = useState("");
  const [answerNum, setAnswerNum] = useState(0);
  const [checkboxMap, setCheckboxMap] = useState(new Map());
  const getImageUrl = async () => {
    if (!question.image_url) {
      setImageUrl(null);
    } else {
      const response = await httpCall(question.image_url, "GET", null, null);
      setImageUrl(response.image_url);
    }
  };

  const getAnswerNum = async () => {
    setAnswerNum(question.answers.length);
  };

  const initCheckedBoxes = async () => {
    var _checkboxMap = new Map();
    question.choices.map((choice) => {
      _checkboxMap.set(choice, false);
    });
    setCheckboxMap(_checkboxMap);
  };

  const handleCheckboxChange = async (event) => {
    const selectedValue = event.target.value;
    var newCheckboxMap = checkboxMap;
    if (newCheckboxMap.has(selectedValue)) {
      newCheckboxMap.set(selectedValue, !newCheckboxMap.get(selectedValue));
      setCheckboxMap(newCheckboxMap);
      var newAnswer = [];
      for (let [choice, checked] of newCheckboxMap) {
        if (checked) {
          newAnswer.push(choice);
        }
      }
      var newUserAnswer = userAnswer;
      newUserAnswer.set(question.question_id, newAnswer);
      setUserAnswer(newUserAnswer);
    }
  };

  const handleRadioChange = async (event) => {
    var newUserAnswer = userAnswer;
    newUserAnswer.set(question.question_id, [event.target.value]);
    setUserAnswer(newUserAnswer);
  };

  useEffect(() => {
    getImageUrl();
    getAnswerNum();
    initCheckedBoxes();
  }, []);

  return (
    <Box sx={quizPageStyle.questionBoxStyle}>
      <Card row sx={quizPageStyle.questionCardStyle}>
        {imageUrl && (
          <AspectRatio ratio="1.3" sx={{ width: 300 }}>
            <img src={imageUrl} alt={commonConstants.dogeImageSrc} />
          </AspectRatio>
        )}

        <Box>
          <Card sx={{ paddingLeft: 3, paddingTop: 0 }}>
            <h3>{question.description}</h3>
          </Card>
          <TypographyJoy
            fontSize="sm"
            aria-describedby="card-description"
            mb={1}
          >
            {answerNum == 1 && !showAnswer && (
              <FormGroup onChange={handleRadioChange} sx={{ marginLeft: 3 }}>
                <RadioGroup>
                  {question.choices.map((choice) => (
                    <Box key={choice}>
                      {!isValidHttpUrl(choice) && ( // question with no image
                        <FormControlLabel
                          control={<Radio />}
                          key={choice}
                          label={choice}
                          value={choice}
                        />
                      )}
                      {isValidHttpUrl(choice) && ( // question with image
                        <Box sx={{ display: "flex", marginBottom: 2 }}>
                          <AspectRatio
                            ratio="1.3"
                            sx={{ width: 300, marginRight: 2 }}
                          >
                            <img src={choice} />
                          </AspectRatio>
                          <FormControlLabel
                            control={<Radio />}
                            key={choice}
                            value={choice}
                          />
                        </Box>
                      )}
                    </Box>
                  ))}
                </RadioGroup>
              </FormGroup>
            )}

            {answerNum > 1 && !showAnswer && (
              <FormGroup onChange={handleCheckboxChange} sx={{ marginLeft: 3 }}>
                {question.choices.map((choice) => (
                  <FormControlLabel
                    control={<Checkbox />}
                    key={choice}
                    label={choice}
                    value={choice}
                  />
                ))}
              </FormGroup>
            )}

            {showAnswer &&
              submitResponse.user_answer.toString() ==
                submitResponse.right_answer.toString() && (
                <Box ml={2}>
                  <Card>
                    <h3>Correct!</h3>
                    {submitResponse &&
                      submitResponse.user_answer.map((ua) => (
                        <Card
                          key={ua}
                          sx={{ bgcolor: quizPageStyle.correctColor }}
                        >
                          {!isValidHttpUrl(ua) && <h4>{ua}</h4>}
                          {isValidHttpUrl(ua) && <img src={ua}></img>}
                        </Card>
                      ))}
                  </Card>
                </Box>
              )}

            {showAnswer &&
              submitResponse.user_answer.toString() !=
                submitResponse.right_answer.toString() && (
                <Box ml={2}>
                  <Card>
                    <h3>Wrong!!!</h3>
                    <h4>Your answers:</h4>
                    {submitResponse &&
                      submitResponse.user_answer.map((ua) => (
                        <Card
                          key={ua}
                          sx={{
                            bgcolor: quizPageStyle.wrongColor,
                            color: "white",
                            marginBottom: 2,
                          }}
                        >
                          {!isValidHttpUrl(ua) && <h4>{ua}</h4>}
                          {isValidHttpUrl(ua) && <img src={ua}></img>}
                        </Card>
                      ))}
                  </Card>
                  <Card>
                    <h4>Answer:</h4>
                    {submitResponse &&
                      submitResponse.right_answer.map((ra) => (
                        <Card
                          key={ra}
                          sx={{
                            bgcolor: quizPageStyle.correctColor,
                            marginBottom: 2,
                          }}
                        >
                          {!isValidHttpUrl(ra) && <h4>{ra}</h4>}
                          {isValidHttpUrl(ra) && <img src={ra}></img>}
                        </Card>
                      ))}
                  </Card>
                </Box>
              )}
          </TypographyJoy>
        </Box>
      </Card>
    </Box>
  );
}

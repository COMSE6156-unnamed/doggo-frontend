const dogeImageSrc = "img/doge.png";
const sadDogeImageSrc = "https://coms6156-dog-data.s3.amazonaws.com/images/doge_sad.png";
const weeeDogeImageSrc = "https://coms6156-dog-data.s3.amazonaws.com/images/doge_weee.png";
const badDogeImageSrc = "https://coms6156-dog-data.s3.amazonaws.com/images/badDoge.png";
const dogRoute = "/dogs";
const profileRoute = "/profile";
const quizRoute = "/quiz";
const rootRoute = "/";
const badDogRoute = "/baddog";
const createDogRoute = "/createdog";

// Pagination links, rel property
const linkTypeCurr = "current";
const linkTypePrev = "prev";
const linkTypeNext = "next";

const commonConstants = {
  dogRoute,
  profileRoute,
  quizRoute,
  badDogRoute,
  createDogRoute,
  dogeImageSrc,
  sadDogeImageSrc,
  weeeDogeImageSrc,
  badDogeImageSrc,
  rootRoute,
  linkTypePrev,
  linkTypeNext,
  linkTypeCurr
};

export default commonConstants;

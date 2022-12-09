const getAllDogs = `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/dogs`;
const quizBasePath = `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/quiz`;

const apiRoutes = {
    getAllDogs,
    quizBasePath
}

export default apiRoutes;
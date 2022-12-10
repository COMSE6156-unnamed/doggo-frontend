const getAllDogs = `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/dogs`;
const loginRoute = `${process.env.REACT_APP_USER_API_HOST}/login`;
const logoutRoute = `${process.env.REACT_APP_USER_API_HOST}/logout`;
const quizBasePath = `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/quiz`;
const apiRoutes = {
    getAllDogs,
    loginRoute,
    logoutRoute,
    quizBasePath
}

export default apiRoutes;
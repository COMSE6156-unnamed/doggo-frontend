const getAllDogs = `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/dogs`;
const getCategories = `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/categories`;
const getOrigins = `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/origins`;
const getSizes = `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/sizes`;
const createDog = `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/user_creates_dog`; // post method

const loginRoute = `${process.env.REACT_APP_USER_API_HOST}/login`;
const logoutRoute = `${process.env.REACT_APP_USER_API_HOST}/logout`;
const quizBasePath = `${process.env.REACT_APP_API_GATEWAY_ENDPOINT}/quiz`;
const getUserRoute = `${process.env.REACT_APP_USER_API_HOST}/user`;
const apiRoutes = {
    getAllDogs,
    getCategories,
    getOrigins,
    getSizes,
    createDog,
    loginRoute,
    logoutRoute,
    quizBasePath,
    getUserRoute
}

export default apiRoutes;
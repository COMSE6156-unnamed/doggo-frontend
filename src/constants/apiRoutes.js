const getAllDogs = `${process.env.REACT_APP_DOGINFO_API_HOST}/dogs`;
const loginRoute = `${process.env.REACT_APP_USER_API_HOST}/login`;
const logoutRoute = `${process.env.REACT_APP_USER_API_HOST}/logout`;

const apiRoutes = {
    getAllDogs,
    loginRoute,
    logoutRoute
}

export default apiRoutes;
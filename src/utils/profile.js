import apiRoutes from "../constants/apiRoutes";

export const profile = () => {
    console.log('profile middleware');
    window.location.href = apiRoutes.profileRoute;
}
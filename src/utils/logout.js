import Cookies from "js-cookie";
import apiRoutes from "../constants/apiRoutes";
import userConstants from "../constants/userConstants";

export const logout = () => {
    window.location.href = apiRoutes.logoutRoute;
    Cookies.remove(userConstants.accessTokenKey);
    Cookies.remove(userConstants.idTokenKey);
}
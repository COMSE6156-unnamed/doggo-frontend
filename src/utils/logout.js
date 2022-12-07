import Cookies from "js-cookie";

export const logout = () => {
    window.location.href = 'http://127.0.0.1:5000/logout';
    Cookies.remove("access_token");
    Cookies.remove("id_token");
}
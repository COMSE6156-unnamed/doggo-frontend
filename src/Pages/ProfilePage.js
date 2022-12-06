import { React, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Cookies from 'js-cookie'
import { httpCall } from "../utils/httpCall";
import { useCookies } from "react-cookie";

function ProfilePage () {
    const [cookies, setCookie] = useCookies();
    
    useEffect(() => {
        console.log('cook', Cookies.get());
        
      }, []);

    return (
        <div>
            <Button href="http://127.0.0.1:5000/login/google">Login</Button>
            <Button href="http://127.0.0.1:5000/logout">Logout</Button>
        </div>
    )
}

export default ProfilePage;
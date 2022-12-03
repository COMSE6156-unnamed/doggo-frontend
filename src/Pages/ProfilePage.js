import { React, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import { httpCall } from "../utils/httpCall";
import { useCookies } from "react-cookie";

function ProfilePage () {
    const [cookies, setCookie] = useCookies(['session']);
    const handleClickLogin = async () => {
        console.log('handleClickLogin')
        const response = await httpCall('http://127.0.0.1:5000/login/google', "GET", null, null);
        console.log('response', response);
    }
    
    useEffect(() => {
        console.log('cookie', cookies)
      }, []);

    return (
        <div>
            <Button onClick={handleClickLogin}>Login</Button>
        </div>
    )
}

export default ProfilePage;
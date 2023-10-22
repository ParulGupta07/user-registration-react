import React from "react";
import { Outlet } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <h1>Registration form</h1>
            <Outlet />
        </div>
    )
}

export default HeaderComponent;
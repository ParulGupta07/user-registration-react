import React, { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import '../home-page/home-page.styles.css'

const HomePage = () => {

    const [loginData, setLoginData] = useState([]);
    const [username, setUsername] = useState('');

    const displayUserName = () => {
        const loggedInData = localStorage.getItem("loginKiaHuaUser");
        console.log(loggedInData);
        if (loggedInData && loggedInData.length) {
            const user = JSON.parse(loggedInData);
            setLoginData(user);
            const userData = user.filter((el, key) => {
                return el;

            });
            console.log(userData[0].userName);
            setUsername(userData[0].userName);
        }
    }

    const removeData = () => {
        localStorage.removeItem("loginKiaHuaUser");
    }

    useEffect(() => {
        displayUserName();
    },
        [])


    return (
        <div>
            <h1 className="name-container">Welcome {username} &#128512;</h1>
            <div className="details-container"></div>
            <br />
            <NavLink to='/login' onClick={removeData}>Logout</NavLink>
        </div>
    )

}

export default HomePage;
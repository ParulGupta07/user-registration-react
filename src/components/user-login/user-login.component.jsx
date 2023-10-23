import React, { useState } from "react";
import emailImg from '../assets/images/email.png';
import passwordImg from '../assets/images/password.png';
import { NavLink, json, useNavigate } from "react-router-dom";
import registerationImg from '../registration-required-form-register-action-260nw-554234941.png';

const UserLogin = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleData = (event) => {
        const { name, value } = event.target;
        console.log({ ...loginData, [name]: value });
        setLoginData({ ...loginData, [name]: value });
    }

    const navigate = useNavigate();

    const submitData = (event) => {

        event.preventDefault();
        const { email, password } = loginData;

        const getUser = localStorage.getItem("userKaPrivateData");
        console.log(getUser);

        if (!email) {
            alert("E-mail is required to login");
        }
        else if (!(email.includes('@') && email.includes('.com'))) {
            alert("Please enter valid email");
        }
        else if (!password) {
            alert("Password is required to login")
        }
        else {
            if (getUser && getUser.length) {
                const userData = JSON.parse(getUser);
                const userLoginData = userData.filter((user, key) => {
                    return (user.email === email && user.password === password)
                });
                console.log(userLoginData);
                if (userLoginData.length === 0) {
                    alert("Please enter valid email/ password");
                }
                else {
                    console.log("login successful");
                    navigate("/home");
                    localStorage.setItem("loginKiaHuaUser", JSON.stringify(userLoginData));
                }
            }
        }
    }

    return (
        <div className="sign-up-form">
            <section className="container">
                <div className="left-container">
                    <h3 className="sign-up">Login</h3>
                    <form>
                        <div className="input">
                            <img className="input-img" src={emailImg} />
                            <input type='email' onChange={handleData} name='email' placeholder="Your E-mail" className="input-field" />
                            <br />
                        </div>
                        <div className="input">
                            <img className="input-img" src={passwordImg} />
                            <input type='password' onChange={handleData} name='password' placeholder="Your Password" className="input-field" />
                            <br />
                        </div>
                        <button type='submit' onClick={submitData} className="submit-btn">Submit</button>
                    </form>
                    <p>New user?
                    <NavLink to='/'>
                        Register here..!!
                    </NavLink>
                </p>
                </div>
                <div className="right-container">
                    <img src={registerationImg} />
                </div>
            </section>
        </div>
    );
}

export default UserLogin;
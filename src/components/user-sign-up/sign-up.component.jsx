import React, { useState } from "react";
import emailImg from '../assets/images/email.png'
import passwordImg from '../assets/images/password.png'
import userNameImg from '../assets/images/person.png'
import registerationImg from '../registration-required-form-register-action-260nw-554234941.png';
import './sign-up.styles.css'
import { NavLink, useNavigate } from "react-router-dom";

const UserSignUp = () => {

    const [signUpData, setSignUpData] = useState({
        userName: "",
        email: "",
        password: "",
    });


    const navigate = useNavigate();

    const handleData = (event) => {
        const { name, value } = event.target;
        console.log({ ...signUpData, [name]: value });
        setSignUpData({ ...signUpData, [name]: value });
    }

    const submitData = (event) => {
        event.preventDefault();

        const { userName, email, password } = signUpData;

        if (!userName) {
            alert("Username is required to register");
        }
        else if (!email) {
            alert("E-mail is required to register");
        }
        else if (!(email.includes('@'))) {
            alert("Please enter valid email");
        }
        else if (!password) {
            alert("Password is required to register")
        }
        else if (!((password.length) >= 8 && (password.length) <= 12)) {
            alert("Passwword length must be between 8 to 12 alphabets")
        }
        else {
            console.log("User registered successfully");
            const users = JSON.parse(
                localStorage.getItem('userKaPrivateData') || '[]'
            )
            console.log(users);

            console.log(signUpData.email);

            if (users.length >= 0) {

                const userLoginData = users.filter((user, key) => {
                    return (user.email === email)
                });
                console.log(userLoginData);
                if (userLoginData && userLoginData.length) {
                    alert("User already registered. Please register with another mail address.");
                }
                else {
                    users.push(signUpData);
                    console.log(users);
                    localStorage.setItem("userKaPrivateData", JSON.stringify(users));
                    localStorage.setItem("loginKiaHuaUser", JSON.stringify([signUpData]));
                    navigate('/home');
                }
            }
        }
    }

    return (
        <div className="sign-up-form">
            <section className="container">
                <div className="left-container">
                    <h3 className="sign-up">Sign up</h3>
                    <form>
                        <div className="input">
                            <img className="input-img" src={userNameImg} />
                            <input type='text' onChange={handleData} name='userName' placeholder="Your Username" className="input-field" />
                            <br />
                        </div>
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
                    <p className="additional-link">Already registered? <NavLink to='/login'>Kindly login here..!!</NavLink></p>
                </div>
                <div className="right-container">
                    <img src={registerationImg} />
                </div>
            </section>
        </div>
    )
}

export default UserSignUp;
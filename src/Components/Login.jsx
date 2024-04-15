import "./SignUp.css";
import BGRight from "./chris-lee-70l1tDAI6rM-unsplash.jpg"
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [data, setData] = useState({ "email": "", "password": "" })
    let Navigate = useNavigate()
    const Onchange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);

    }
    const url = "http://localhost:5001"
    const login = async () => {
        const response = await fetch(`${url}/api/auth/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: data.email, password: data.password }) // body data type must match "Content-Type" header

        });
        const json = await response.json()
        if (json.success) {
            localStorage.setItem("authtoken", json.authtoken)
            Navigate("/")
            window.location.reload(false);

        } else {
            setData({ email: "", password: "" })
        }
    }
    return (
        <div className="sign-up">
            <div className="sign-up-inner">
                <div className="instance-parent">
                    <div className="frame-wrapper">
                        <div className="frame-parent">
                            <div className="get-started-now-wrapper">
                                <h1 className="get-started-now">Get Started Now</h1>
                            </div>
                            <div className="enter-your-credentials">
                                Enter your Credentials to access your account
                            </div>
                            <div className="frame-group">
                                <div className="apple-sign-in-parent">
                                    <div className="apple-sign-in">
                                        <div className="account-login">
                                            <div className="name">Name</div>
                                        </div>
                                        <div className="enter-your-name">
                                            <input
                                                name="name"
                                                onChange={Onchange}
                                                className="i-agree-to-terms-policy"
                                                placeholder="Enter your name"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="frame-container">
                                        <div className="name-wrapper">
                                            <div className="name1">email address</div>
                                        </div>
                                        <div className="frame-div">
                                            <input
                                                onChange={Onchange}
                                                name="email"
                                                className="frame-child"
                                                placeholder="Enter your email"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="frame-parent1">
                                        <div className="name-container">
                                            <div className="name2">Password</div>
                                        </div>
                                        <div className="frame-wrapper1">
                                            <input
                                                onChange={Onchange}
                                                name="password"
                                                className="frame-item"
                                                placeholder="Password"
                                                type="password"
                                            />
                                        </div>
                                    </div>
                                    <div className="group-div">
                                        <input type="checkbox" />
                                        <div className="i-agree-to-container">
                                            {`I agree to the `}
                                            <span className="terms-policy">{`terms & policy`}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="instance-group">
                                    <div className="frame-parent2">
                                        <div className="name-frame">
                                            <div className="name3">Name</div>
                                        </div>
                                        <div className="frame-wrapper2">
                                            <div className="name-wrapper1">
                                                <div className="name4">Name</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={login} className="login-label" style={{ border: "none", background: "#00000000" }}>
                                        <b className="login">Log In</b>
                                    </button>
                                </button>
                            </div>
                            
                            
                        </div>
                    </div>
                    <button className="btn">
                        <Link to="/SignIn">Sign In</Link>
                    </button>
                </div>
            </div>
            <img
                className="chris-lee-70l1tdai6rm-unsplash-icon"
                loading="lazy"
                alt=""
                src={BGRight}
            />
        </div>
    )
}

export default Login;

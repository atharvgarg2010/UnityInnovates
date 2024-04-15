import "./SignUp.css";
import BGRight from "./chris-lee-70l1tDAI6rM-unsplash.jpg"
import { Link } from "react-router-dom";
import { useContext, useState } from 'react'
import NotesContext from "../Context/Note/NotesContext";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    // const context = useContext(NotesContext)
    // const setUpdata = context.setUpdata
    // const updata = context.updata
    const url = "http://localhost:5001"
    const Navigate = useNavigate()
    const [data, setData] = useState({ "name": "", "email": "", "password": "", "tag": "" })

    const Onchange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);

    }

    const login = async () => {
        console.log(data);
        const response = await fetch(`${url}/api/auth/createuser`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: data.name, email: data.email, password: data.password, tag: data.tag }) // body data type must match "Content-Type" header

        });
        const json = await response.json()
        console.log(json.success);
        if (json.success) {
            localStorage.setItem("authtoken", json.authtoken)
            Navigate("/")
            console.log("Done");

            window.location.reload(false);

        } else {
            alert(`Error:${json.error}`)
            console.log(json);
        }
    }
    return (
        <div>
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
                                                <input onChange={Onchange}
                                                    name="name"
                                                    className="i-agree-to-terms-policy"
                                                    placeholder="Enter your name"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="frame-container">
                                            <div className="name-wrapper">
                                                <div className="name1">Email address</div>
                                            </div>
                                            <div className="frame-div">
                                                <input onChange={Onchange}
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
                                                <input onChange={Onchange}
                                                    name="password"
                                                    className="frame-item"
                                                    placeholder="Password"
                                                    type="password"
                                                />
                                            </div>

                                        </div>
                                        <div className="frame-parent1">
                                            <div className="name-container">
                                                <div className="name2">Tag</div>
                                            </div>
                                            <div className="frame-wrapper1">
                                                <input onChange={Onchange}
                                                    name="tag"
                                                    className="frame-item"
                                                    placeholder="Password"
                                                    type="text"
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
                                        <button onClick={login} type={"button"} className="login-label" style={{ background: "none", outline: "none", border: "none" }}>
                                            <b className="login">Signup</b>
                                        </button>
                                    </button>
                                </div>

                            </div>
                        </div>
                        {/* <button className="instance-container">
                            <div className="frame-parent3">
                                <div className="name-wrapper2">
                                    <div className="name5">Name</div>
                                </div>
                                <div className="frame-wrapper3">
                                    <div className="name-wrapper3">
                                        <div className="name6">Name</div>
                                    </div>
                                </div>
                            </div>
                            <div className="login-button">
                                <Link to={'/login'}>
                                    <b className="login1">
                                        Login

                                    </b>
                                </Link>
                            </div>
                        </button> */}
                        <button className="btn">
                            <Link to="/login">Login</Link>
                        </button>
                    </div>
                </div>
                <img
                    className="chris-lee-70l1tdai6rm-unsplash-icon"
                    loading="lazy"
                    alt=""
                    src={BGRight}
                />
            </div></div>
        // <>
        // <button onClick={login}>Submit</button>
        // </>

    )
}

export default SignUp;

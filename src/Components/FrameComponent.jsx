import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <form className="frame-form">
      <div className="welcome-back-parent">
        <h1 className="welcome-back">Welcome back!</h1>
        <h2 className="enter-your-credentials2">
          Enter your Credentials to access your account
        </h2>
      </div>
      <div className="instance-parent1">
        <div className="name-input-parent">
          <div className="name-input">
            <h3 className="name19">Email address</h3>
          </div>
          <div className="frame-wrapper11">
            <input
              className="frame-input"
              placeholder="Enter your email"
              type="text"
            />
          </div>
        </div>
        <div className="instance-parent2">
          <div className="frame-parent9">
            <div className="name-wrapper17">
              <h3 className="name20">Password</h3>
            </div>
            <div className="frame-wrapper12">
              <input className="frame-child2" placeholder="Name" type="text" />
            </div>
          </div>
          <div className="forgot-password-wrapper">
            <div className="forgot-password">forgot password</div>
          </div>
        </div>
        <div className="frame-parent10">
          <div className="remember-checkbox-wrapper">
            <div className="remember-checkbox" />
          </div>
          <div className="remember-for-30">Remember for 30 days</div>
        </div>
        <div className="instance-parent3">
          <button className="instance-parent4">
            <div className="frame-parent11">
              <div className="name-wrapper18">
                <div className="name21">Name</div>
              </div>
              <div className="frame-wrapper13">
                <div className="name-wrapper19">
                  <div className="name22">Name</div>
                </div>
              </div>
            </div>
            <div className="login-wrapper">
              <b className="login4">Login</b>
            </div>
          </button>
          <button className="instance-parent5">
            <div className="frame-parent12" onClick={onFrameContainerClick}>
              <div className="name-wrapper20">
                <div className="name23">Name</div>
              </div>
              <div className="frame-wrapper14">
                <div className="name-wrapper21">
                  <div className="name24">Name</div>
                </div>
              </div>
            </div>
            <div className="login-container">
              <b className="login5">Sign In</b>
            </div>
          </button>
          <div className="frame-wrapper15">
            <div className="or-frame">
              <div className="or2">Or</div>
            </div>
          </div>
        </div>
      </div>
      <div className="imagebackground">
        <div className="frame-parent13">
          <button className="frame-wrapper16">
            <div className="icons8-google-1-container">
              <img
                className="icons8-google-12"
                alt=""
                src="/icons8google-1.svg"
              />
              <div className="sign-in-with4">Sign in with Google</div>
            </div>
          </button>
          <button className="frame-wrapper17">
            <div className="icons8-apple-logo-1-container">
              <img
                className="icons8-apple-logo-12"
                alt=""
                src="/icons8applelogo-1.svg"
              />
              <div className="sign-in-with5">Sign in with Apple</div>
            </div>
          </button>
        </div>
        <div className="sign-up-parent">
          <h3 className="dont-have-an-container">
            <span className="dont-have-an">{`Don’t have an account?  `}</span>
            <span className="sign-up1">Sign Up</span>
          </h3>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent1;

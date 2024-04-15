import React from 'react'
import BGRight from './chris-lee-70l1tDAI6rM-unsplash.jpg' 
function NewPost() {
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
                                                    <div className="name">Title</div>
                                                </div>
                                                <div className="enter-your-name">
                                                    <input  
                                                        name="name"
                                                        className="i-agree-to-terms-policy"
                                                        placeholder="Enter your Title"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="frame-container">
                                                <div className="name-wrapper">
                                                    <div className="name1">Description</div>
                                                </div>
                                                <div className="frame-div">
                                                    {/* <input    
                                                        name="email"
                                                        className="frame-child"
                                                        placeholder="Enter your email"
                                                        type="text"
                                                    /> */}
                                                    <textarea cols="30" rows="10" placeholder='Enter You Description' style={{border:"none"}}></textarea>
                                                </div>
                                            </div>
                                            <div className="frame-parent1">
                                                <div className="name-container">
                                                    <div className="name2">Email</div>
                                                </div>
                                                <div className="frame-wrapper1">
                                                    <input    
                                                        name="Email"
                                                        className="frame-item"
                                                        placeholder="Email"
                                                        type="Email"
                                                    />
                                                </div>
    
                                            </div>
                                            <div className="frame-parent1">
                                                <div className="name-container">
                                                    <div className="name2">Phone</div>
                                                </div>
                                                <div className="frame-wrapper1">
                                                    <input    
                                                        name="phone"
                                                        className="frame-item"
                                                        placeholder="Phone"
                                                        type="number"
                                                    />
                                                </div>
    
                                            </div>
                                            <div className="frame-parent1">
                                                <div className="name-container">
                                                    <div className="name2">Tag</div>
                                                </div>
                                                <div className="frame-wrapper1">
                                                    <select name="" id="" style={{outline:"none", border:"none"}}>
                                                        <option value="Business">Business</option>
                                                        <option value="User">User</option>
                                                        <option value="NGO">NGO</option>
                                                    </select>
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
                                            <button   type={"button"} className="login-label" style={{ background: "none", outline: "none", border: "none" }}>
                                                <b className="login">Submit</b>
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
            // <button  >Submit</button>
            // </>
    

    
    
  )
}

export default NewPost
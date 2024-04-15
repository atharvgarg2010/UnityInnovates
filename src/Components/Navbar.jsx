import React from 'react'
import Logo from './Logo.png'
import "./style.css"
import {
  Link
} from "react-router-dom";
import { useEffect } from 'react';

function Navbar() {
  useEffect(()=>{
    const user = document.getElementById("user")
    const Signin = document.getElementById("sign")
    if (localStorage.authtoken != null) {
  
      //  user.style.display = "block"
      // console.log(user,Signin);
       Signin.style.display = "none"
       user.style.display = "block"
    }
  });

  return (
    <div className='navbar'>
      <img src={Logo} alt="" />
      <div className="tabs">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Join Us</Link>

        <Link to="/SignIn" style={{ display: "block" }} id='sign'>User</Link>
        <Link to="/user" id='user' style={{ display: "none" }}>User</Link>


      </div>
    </div>
  )
}

export default Navbar

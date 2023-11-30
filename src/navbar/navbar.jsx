import React from 'react'
import logo from "../images/logo.png"
import mail from "../images/mail.png"
import "./navbar.css"
export default function Navbar() {
  return (
    <div>
        <div id="navbar">
            <div className="logo">
                <img src={logo} alt="photo" />
            </div>
            <div className="links text-xl">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Skills</a></li>
            </div>
            <div className="shahmir">
                <button><img src={mail} alt="photo" />Hire me</button>
            </div>
            <div className="ham">
            </div>
        </div>
    </div>
  )
}

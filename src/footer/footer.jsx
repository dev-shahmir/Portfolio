import React from 'react'
import logo from "../images/logo main.png"
import insta from "../images/instagram (1).png"
import git from "../images/github.png"
import linkdin from "../images/linkedin.png"
import "./footer.css"
export default function Footer() {
  return (
    <div>
        <div id="footer">
        <div className="logoo">
            <img src={logo} alt="logo" />
        </div>
        <h4 className='font-semibold text-xl'>All Rights Are Reserved, Develop By Shahmir Ahmad</h4>
        <div className="links">
          <a target='_blank' rel="noreferrer" href="https://github.com/dev-shahmir"><img src={git} alt="logo" /></a>
          <a target='_blank' rel="noreferrer" href="https://instagram.com/shahmirx2023?igshid=OGQ5ZDc2ODk2ZA=="><img src={insta} alt="logo" /></a>
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/shahmir-ahmad-501286234/"><img src={linkdin} alt="logo" /></a>
        </div>
        </div>
    </div>
  )
}

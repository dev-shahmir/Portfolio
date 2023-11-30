import React from 'react'
import Banner from './banner'
import Info from '../info-sec/info'
import "./main.css"
import git from '../images/github.png'
import insta from '../images/instagram (1).png'
import linkdin from '../images/linkedin.png'
import robot from '../images/robot.png'
import brain from '../images/brain.png'
import Form from '../form/form'
export default function Main() {
  return (
  <div>
        <div className="container">
          <div className="hero-section">
            <div className='info'>
              <h2 className='text-4xl font-bold'>Hello,</h2>
              <h1>I'm Shahmir <br />
                and i'm a Developer</h1>
              <p>I build things for web</p>
              <div className="icons">
               <li><a target='_blank' rel="noreferrer" href="https://github.com/dev-shahmir"><img src={git} alt="" /></a></li>
               <li><a target='_blank' rel="noreferrer" href="https://instagram.com/shahmirx2023?igshid=OGQ5ZDc2ODk2ZA=="><img src={insta} alt="" /></a></li>
               <li><a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/shahmir-ahmad-501286234/"><img src={linkdin} alt="" /></a></li>
              </div>
            </div>
              <div className="hero-img">
              <div className="img-brain">
                <img src={brain} alt="" />
              </div>
              <div className="img-robo">
              <img src={robot} alt="" />
              </div>
              </div>
          </div>
        </div>
        <Banner />
        <Info />     
        <Form />
  </div>
  )
}

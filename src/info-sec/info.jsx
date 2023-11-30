import React from 'react'
import "./info.css"
import html from "../images/5847f5c3cef1014c0b5e489d.png"
import css from "../images/pngegg.png"
import js from "../images/javascript-39404.png"
import react from "../images/pngegg (2).png"
import next from "../images/pngwing.com.png"
import bootstrap from "../images/pngwing.com (1).png"
import node from "../images/pngegg (3).png"
import vscode from "../images/visual-studio-code-icon.png"
import tailwind from "../images/tailwind.png"
import daisy from "../images/favicon-192.png"
import Slider from './slider'
export default function Info() {
  return (
    <div>
        <div className="container-2">
          <div className="about">
            <h1 className='text-4xl font-bold'>About me</h1>
            <p className='text-xl font-semibold'>As A Web Developer, I Am Responsible For <br /> Designing And Developing Web Pages. <br /> My Primary Focus Is To Create Responsive, <br />User-Friendly Experiences That Meet The Needs Of A Diverse Online Audience.</p>
          </div>
          <div className="skill">
            <div className="s-info ">
            <h1 className='text-4xl font-bold'>My Skills</h1>
            <p className='text-xl font-semibold'>Technologies I've been working with recently</p>
            </div>
            <div className="s-img">
            <li><img src={html} alt="" /></li>
            <li><img src={css} alt="" /></li>
            <li><img src={js} alt="" /></li>
            <li><img src={react} alt="" /></li>
            <li><img src={next} alt="" /></li> 
            </div>
            <div className="s-img">
            <li><img src={bootstrap} alt="" /></li>
            <li><img src={node} alt="" /></li>
            <li><img src={vscode} alt="" /></li>
            <li><img src={tailwind} alt="" /></li>
            <li><img src={daisy} alt="" /></li>
            </div>
          </div>
          <div className="mt-32 p-4">
            <h1 className='text-4xl font-bold ml-3 text-purple-950 mb-2'>My Projects</h1>
            <p className='text-2xl font-semibold ml-3 text-purple-950 mb-2'>Some Thing I've Built So Far</p>
          <Slider />
          </div>
        </div>
    </div>
  )
}

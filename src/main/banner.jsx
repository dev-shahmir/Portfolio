import React from 'react'
import './main.css'
import html from "../images/5847f5c3cef1014c0b5e489d.png"
import css from "../images/pngegg.png"
import js from "../images/javascript-39404.png"
import react from "../images/pngegg (2).png"
import next from "../images/pngwing.com.png"
import bootstrap from "../images/pngwing.com (1).png"
import node from "../images/pngegg (3).png"
import vscode from "../images/visual-studio-code-icon.png"





export default function Banner() {
  return (
    <div>
        <div className="banner">
            <div className="exp">
                <h1 className='text-4xl font-bold'>6</h1>
                <p>MONTS OF <br />EXPERIENCE</p>
            </div>
            <div className="project">
                <h1 className='text-4xl font-bold'>10</h1>
                <p>PROJETS COMPLETED <br />AROUND THE WORLD</p>
            </div>
            <div className="tech">
                <li><img src={html} alt="" /></li>
                <li><img src={css} alt="" /></li>
                <li><img src={js} alt="" /></li>
                <li><img src={react} alt="" /></li>
                <li><img src={next} alt="" /></li>
                <li><img src={bootstrap} alt="" /></li>
                <li><img src={node} alt="" /></li>
                <li><img src={vscode} alt="" /></li>
            </div>
        </div>
    </div>
  )
}

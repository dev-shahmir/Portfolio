import React from 'react'
import "./form.css"
export default function Form() {
  return (
    <div className='container-3'>
      <div className="hero-1">
          <div className="h">
          <h1 className=' font-extrabold text-5xl ml-10  text-purple-950'>Lets <span className='text-purple-500 mx-2'>Work</span> Together!</h1>
          </div>
        <div className="f ml-56">
        <div className="talk">
          <h3 className=' font-semibold text-5xl text-purple-950'>Let's discuss on something <span className='text-purple-500 mx-2' >Cool</span> together.</h3>
        </div>
        <div className="form">
        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs mb-4 bg-white" />
        <input type="text" placeholder="Your E-mail" className="input input-bordered w-full max-w-xs bg-white mb-4" />
        <textarea placeholder="Your Message..." className="textarea textarea-bordered textarea-lg w-full max-w-xs mb-4 bg-white" ></textarea>
        <button className="btn w-80 bg-purple-950 text-white text-xl">Submit</button>
        </div>
        </div>
      </div>
    </div>
  )
}

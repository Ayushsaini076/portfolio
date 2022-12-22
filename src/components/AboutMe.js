import React from 'react'
import './Aboutme.css'


function AboutMe() {
  return (
    <div className='about-container'>
        <div className='abouthd'>
        <h3>About Me</h3>
        <p>why choose me?</p>
        </div>
        
        
        <div className="about-parent">
        <div className="aboutimg">

        </div>
        <div className="about-content">
            <p>
            Full stack web  developer with background <br />
            knoledge of MERN stack , along with a knack of <br />
            building applications with utmost efficiency.Strong <br />
            professional willing to be an asset for an organisation.
            </p>
            <div className="btns2">
            <h4>Here are a Few Higlights:</h4>
            <ul className='aboutul'>
                <li>Full stack web development</li>
                <li>Interactive Fontend as per design</li>
                <li>React</li>
                <li>Building REST API</li>
                <li>Managing database</li>
            </ul>
            <div className="btns2">
                <button className='btn1 btn'>Hire Me</button>
                <button className='btn2 btn'>Get Resume</button>
            </div>
            </div>
            


        
        </div>

        </div>
        
      
    </div>
  )
}

export default AboutMe

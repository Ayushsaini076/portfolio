import React from 'react'
import './Home.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Home() {
  return (
    <div className='home-container'>
        <div className="home-parent">
            <div className="home-content">
                <div className="socialicons">
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <TwitterIcon/>

                </div>
                <h2>Hello,I'M Ayush</h2>
                <h1>web Developer</h1>
                <p>knack of building applications with front and back end operations</p>
                <div className="btns">
                    <button className='btn1 btn'>Hire Me</button>
                    
                    <button className='btn2 btn'>Get Resume</button>
                    
                </div>
                
            </div>
            <div className="profileimg">
                <div className="profile-pic"></div>
            </div>
        </div>
        <section>
            <div className="curve">
                {/* <img src="C:\Users\DELL\Desktop\resume\portfolio\public\images\shape-bg.png" alt="" /> */}
            </div>
        </section>
      
    </div>
  )
}

export default Home

import React from 'react'
import './About.css'
import prof from '../../assets/mini.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="abt-title">
        <h1>About Me</h1>
      </div>
     <div className="abt-content">
        <div className="abt-left">
        <img src={prof} alt="" />
        </div>
        <div className="abt-right">
            <div className="abt-text">
                <p>I am a fresher with strong technical skills in full stack development, eager to contribute to innovative projects and grow as a developer.</p>
            </div>
            <div className="abt-skills">
                  <div className='skill'><p>HTML&CSS</p> <hr style={{width:"90%"}} /> </div>
                <div className="skill"><p>JavaScript</p> <hr style={{width:"70%"}} /></div>
                <div className="skill"><p>React JS</p> <hr style={{width:"80%"}} /></div>
                <div className="skill"><p>Express Js</p> <hr style={{width:"60%"}} /></div>
                <div className="skill"><p>Node Js</p> <hr style={{width:"70%"}} /></div> 
            </div>
        </div>
     </div>
     <div className="empty"></div>
    </div>
  )
}

export default About

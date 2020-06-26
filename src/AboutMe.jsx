
import React, { Component } from "react"
import "./AboutMe.css"

class AboutMe extends Component {
  render() {
    return (
      <container>
        <a id="about"></a>
        <div className="about-me-container">
          <div className="name">
            <h2>Hi, <span>I'm Bianca!</span></h2>
          </div>
          <div className="title">
            <h2>Software Engineer / Full Stack Developer</h2>
          </div>
          <div>
            <img className='self-img' alt="personal pic" src='https://i.imgur.com/pzPY0IN.png'></img>
          </div>
          <div className="description">
            <p>I am a highly-motivated full-stack web developer with an extensive background in music and film production, management, marketing and design.  My passion for creativity and technology combined with my problem-solving mind-set fuels my drive as a software engineer.</p>
            <p><span>I'm always up for a challenge and enjoy working with others and independently as needed seeing projects through to their full fruition!</span></p>
          </div>
        </div>

        {/* <div>
          <container>
            <div className="skills-tools-container">
              <div className="skills-tools-title">
                <h2>Skills and Tools</h2>
              </div>
              <ul className="about-skill-list">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>



              </ul>

            </div>
          </container>
        </div> */}
      </container>

    )
  }
}



export default AboutMe


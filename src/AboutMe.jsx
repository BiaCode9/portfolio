
import React, { Component } from "react"
import "./AboutMe.css"

class AboutMe extends Component {
  render() {
    return (

      <div className="about-me-container">
        <div className="name">
          <a id="about"></a>
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




    )
  }
}



export default AboutMe


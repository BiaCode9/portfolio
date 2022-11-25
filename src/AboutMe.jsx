
import React, { Component } from "react"
import "./AboutMe.css"

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me-container">

        <div className="name">
          <a id="about"></a>
          <h2>Hi, <span className="bianca">I'm Bianca!</span></h2>
        </div>
        <div className="title">
          <h2>Software Engineer |<span className="fs-dev"> Web Designer</span></h2>
        </div>
        <div>
          <img className='self-img' alt="personal pic" src='https://i.imgur.com/pzPY0IN.png'></img>
        </div>
        <div className="description">
          <p>I am a highly-motivated full-stack web developer with an extensive background in music and film production, management, pr and design.  My passion for creativity and technology combined with my problem-solving mindset fuels my drive as a software engineer.</p>
          <p><span>I also provide website hosting, content, graphic design, maintenance, and all digital marketing services including but not limited to social media setup and management, Search Engine Optimization (SEO), Google Business setup, review capture and management, and e-mail/text marketing campaigns.  I'm always up for a challenge and enjoy working with others and independently as needed seeing projects through to their full fruition!</span></p>
        </div>
      </div>

      

    )
  }
}



export default AboutMe


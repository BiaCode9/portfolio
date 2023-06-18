
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
          <img className='self-img' alt="personal pic" src='https://i.imgur.com/XE1UY5E.jpg'></img>
        </div>
        <div className="description">
          <p>I am a highly-motivated full-stack web developer with an extensive background in music and film production, management, pr and design.  My passion for creativity and technology combined with my problem-solving mindset fuels my drive as a software engineer.</p>
          <p><span>In addition to website design and development, I provide digital marketing services including social media management, content and blog writing, graphic design, hosting and maintenance, Search Engine Optimization (SEO), Google Business setup, review capture and management, and e-mail/text marketing campaigns.  </span></p>
          <p>I'm always up for a challenge, gaurantee 100% customer satisfaction, and enjoy working with others or independently as needed seeing projects through to their full fruition!</p>
        </div>
      </div>

      

    )
  }
}



export default AboutMe


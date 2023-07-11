
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
          <p>I am a highly-motivated full-stack web developer with an extensive background in content design, music and film production, management, and PR.  My passion for creativity and technology combined with my problem-solving mindset fuels my drive for challenge and opportunity.</p>
          <p><span>I also provide digital marketing services and packages including social media management, blogs, graphic design, news publications, website hosting and maintenance, Search Engine Optimization (SEO), review management, and e-mail/text campaigns.  </span></p>
          <p>I gaurantee nothing less than 100% customer satisfaction and enjoy working with others or independently as needed seeing projects through to their full fruition!</p>
        </div>
      </div>

      

    )
  }
}



export default AboutMe


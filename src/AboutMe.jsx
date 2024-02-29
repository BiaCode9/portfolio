
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
          <p>I am a highly-motivated full-stack web developer with an extensive background in content design, PR, management, and music and film production.  I embrace the fusion of creativity and technology which fuels my drive for challenge and opporunity.  My journey has honed my problem-solving mindset, proactive dedication, and excellent communication skills.</p>
          <p><span>As a digital marketing enthusiast, I offer comprehensive services and packages including: 
            Social Media Management,
            Engaging Blogs,
            Eye-catching Graphic Design,
            Top News Publications,
            Website Hosting and Maintenance,
            Search Engine Optimization (SEO),
            Review Management, and
            Effective E-mail and Text Campaigns  </span></p>
         My commitment? Nothing less than 100% client satisfaction. Whether collaborating with others or working independently, I thrive on seeing projects flourish from inception to completion! Let’s create something remarkable together! 🚀 🌟 
        </div>
      </div>

      

    )
  }
}



export default AboutMe


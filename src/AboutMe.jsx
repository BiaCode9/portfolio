
import React, { Component } from "react"
import "./AboutMe.css"

class AboutMe extends Component {
  render() {
    return (
      <container>
        <div className="about-me-container">
          <div className="name">
            <h2>Hi, I'm Bianca!</h2>
          </div>
          <div className="title">
            <h2>Software Engineer / Full Stack Developer</h2>
          </div>
          <div>
            <img className='self-img' alt="personal pic" src='https://i.imgur.com/pzPY0IN.png'></img>
          </div>
          <div className="description">
            <p> of course offline you cannot make api calls - since, our apps need api calls, we dont need to use line 5 with service worker so keep line 18 as “unregister” you can run a test in dev tools under “lighthouse” and test your app and give it a score based how efficient your application is </p>
          </div>
        </div>

        <div>
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
        </div>
      </container>

    )
  }
}



export default AboutMe


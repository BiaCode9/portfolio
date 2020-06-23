
import React, { Component } from "react"
import "./AboutMe.css"

class AboutMe extends Component {
  render() {
    return (
      <section>
        <div className="about-me-container">
          <div className="name">
            <h2>Hi, My name is Bianca!</h2>
          </div>
          <div className="title">
            <h2>Software Engineer / Full Stack Developer</h2>
          </div>
          <div>
            <img className='self-img' alt="personal pic" src='https://i.imgur.com/pzPY0IN.png'></img>
          </div>
          <div className="description">
            <p> of course offline you cannot make api calls - since, our apps need api calls, we dont need to use line 5 with service worker so keep line 18 as “unregister” -) (you can run a test in dev tools under “lighthouse” and test your app and give it a score based how efficient your application is </p>
          </div>

        </div>

      </section>

    )
  }
}



export default AboutMe



import React, { Component } from "react"
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="container">
          <div className="overlay">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" src="https://i.imgur.com/3DrUNrO.mp4" type="video/mp4">
            </video>
            <nav className="main-nav">
              <ul className="main-nav-list">
                <li >
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Me</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="software-title">
              <h1>FULL STACK <span>WEB DEVELOPER</span>  </h1>
            </div>
            <div className="sub-title">
              <p> Development  <span>/ Innovation /</span>  Design </p>
            </div>

          </div>




          {/* <h1 className="animate__animated animate__bounce">An animated element</h1> */}
        </div>
      </header >


    )
  }
}



export default Header




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
                <li>
                  <a className="scroll" href="#home"><span>Home</span></a>
                </li>
                <li>
                  <a className="scroll" href="#about">About Me</a>
                </li>
                <li>
                  <a className="scroll" href="#projects">Projects</a>
                </li>
                <li>
                  <a className="scroll" href="#contact">Contact</a>
                </li>
                <li>
                  <a className="scroll" href="https://digitalxconcierge.com">DIGITALX</a>
                </li>
              </ul>
            </nav>
            <div className="titles">
              <div className="software-title">
                <h1>FULL-STACK <span className="web-developer">WEB DEVELOPER</span></h1>
              </div>
              <div className="sub-title">
                <p> Development  <span>| Innovation |</span>  Design</p>
              </div>
              
            </div>
          </div>
        </div>
      </header>
    )
  }
}


export default Header



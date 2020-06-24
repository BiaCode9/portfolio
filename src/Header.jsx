
import React, { Component } from "react"
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <container>
        <div className="header">
          <div className="overlay">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" src="https://i.imgur.com/3DrUNrO.mp4" type="video/mp4">
            </video>
            <ul className="navLinks">
              <li>
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

          </div>

        </div>

      </container >

    )
  }
}



export default Header




import React, { Component } from "react"
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <container>
        <div className="header">
          {/* <div className="navBar"> */}
          <ul className="navBar">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="my-name">
          <h1>{this.props.name}</h1>
        </div>

      </container >

    )
  }
}



export default Header


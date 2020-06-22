
import React, { Component } from "react"
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.name}</h1>
        <div className="navBar">
          <li>{this.props.li1}</li>
          <li>{this.props.li2}</li>
          <li>{this.props.li3}</li>
        </div>
      </div>

    )
  }
}



export default Header
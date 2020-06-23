
import React, { Component } from "react"
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <container>
        <div className="header">
          <div className="navBar">
            <li>{this.props.li1}</li>
            <li>{this.props.li2}</li>
            <li>{this.props.li3}</li>
          </div>
          <div className="my-name">
            <h1>{this.props.name}</h1>
          </div>
        </div>
      </container>

    )
  }
}



export default Header


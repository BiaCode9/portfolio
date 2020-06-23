
import React, { Component } from "react"
import './Project.css';

class Project extends Component {
  render() {
    return (
      <div className="project">
        <h2>{this.props.title}</h2>
        <div className='imgp'>
          <img src={this.props.img}></img>
          <p>{this.props.description}</p>
        </div>
      </div>
    )

  }
}



export default Project;
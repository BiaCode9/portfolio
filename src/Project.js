
import React, { Component } from "react"
import './Project.css';

class Project extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="project-title">
          <h2>{this.props.title}</h2>
          <div className='project-img'>
            <img src={this.props.img}></img>
          </div>
          <div className='project-description'>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    )

  }
}



export default Project;
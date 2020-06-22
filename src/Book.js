
import React, { Component } from "react"
import './Book.css';

class Book extends Component {
  render() {
    return (
      <div className="book">
        <h2>{this.props.title}</h2>
        <div className='imgp'>
          <img src={this.props.img}></img>
          <p>{this.props.description}</p>
        </div>
      </div>
    )

  }
}



export default Book;
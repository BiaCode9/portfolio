
import React, { Component } from "react"
import './Project.css';

class Project extends Component {
  render() {
    return (
      <section className="all-projects">

        <div className="mm-project-container">

          <div className="title">
            <h2>Music Trivia Mayhem</h2>
          </div>
          <div>
            <img className='project-img' src='https://i.imgur.com/gIFT77p.png'></img>
          </div>
          <div className='project-description'>
            <p>'A Baltimore detective and a medical examiner must work together when the witnesses of a long-ago crime become the victims of a deranged killer in this gripping romantic suspense novel.'</p>
          </div>
        </div>


        <div className="instabook-project-container">
          <div className="title">
            <h2>InstaBook</h2>
          </div>
          <div>
            <img className='project-img' src='https://i.imgur.com/gIFT77p.png'></img>
          </div>
          <div className='project-description'>
            <p>';aklsjdf;laskdjfal;skdjfal;skdjfals;dkjfals;dkfjsal;dkjf'</p>
          </div>
        </div>




        <div className="instacart-project-container">
          <div className="title">
            <h2>InstaCart-Costco</h2>
          </div>
          <div>
            <img className='project-img' src='https://i.imgur.com/gIFT77p.png'></img>
          </div>
          <div className='project-description'>
            <p>'99999999999999</p>
          </div>
        </div>

      </section>








      // <div className="project-title">
      //   <h2>{this.props.title}</h2>
      // </div>
      // <div className='project-img'>
      //   <img src={this.props.img}></img>
      // </div>
      // <div className='project-description'>
      //   <p>{this.props.description}</p>
      // </div>
      //   </div >




    )

  }
}



export default Project
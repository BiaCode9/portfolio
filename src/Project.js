
import React, { Component } from "react"
import './Project.css';

class Project extends Component {
  render() {

    return (


      <section className="all-projects">
        <a id="projects"></a>

        <div className="mm-project-container">

          <div className="title">
            <h2>Music Trivia Mayhem</h2>
          </div>
          <div>
            <img className='project-img' src='https://i.imgur.com/gIFT77p.png'></img>
          </div>
          <div className='project-description'>
            <p>Music Triva Mayhem is a music trivia website that challenges the user with interesting and unknown facts about the music industry.</p>
          </div>
          <div className="buttons">
            <div className="project-url">
              <a href="https://pages.git.generalassemb.ly/BiaCode2020/Music-Trivia-Mayhem/" class="button">Project URL</a>
            </div>
            <div className="github-url">
              <a href="https://github.com/BiaCode9/Music-Trivia-Mayhem" class="button">Github URL</a>
            </div>
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
            <p>InstaBook is a real-time job post / search platform for last-minute job openings. Users who are online or signed-up will get real-time job alerts for those posts that match their job description profile.</p>
          </div>
          <div className="buttons">
            <div className="project-url">
              <a href="http://theinstabook.surge.sh/" class="button">Project URL</a>
            </div>
            <div className="github-url">
              <a href="https://github.com/BiaCode9/InstaBook" class="button">Github URL</a>
            </div>
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
            <p>'A reacreation of the Instacart-Costco website and mobile application. Instacart is a grocery delivery and pick-up service. Worked on a team consisting of 4 other software engineers and 3 user experience (UX/UI)designers.</p>
          </div>
          <div className="buttons">
            <div className="project-url">
              <a href="http://instacart-costco.surge.sh/" class="button">Project URL</a>
            </div>
            <div className="github-url">
              <a href="https://github.com/BiaCode9/Instacart-Costco" class="button">Github URL</a>
            </div>
          </div>
        </div>

      </section>

      /* // <div className="project-title">
      //   <h2>{this.props.title}</h2>
      // </div>
      // <div className='project-img'>
      //   <img src={this.props.img}></img>
      // </div>
      // <div className='project-description'>
      //   <p>{this.props.description}</p>
      // </div>
      //   </div >
 */



    )

  }
}



export default Project

import React, { Component } from "react"
import './ContactMe.css';

class ContactMe extends Component {
  render() {
    return (

      <div className="contact-container">
        <a id="contact"></a>
        <div className="thanks">
          <h2>Thanks for Stopping By My Page!</h2>
        </div>
        <div className="contact-please">
          <p>Please <span className="contact-me-span"> Contact Me</span> Anytime,</p>
          <p>and I will get back to you <span className="asap-span"> as soon as possible!</span></p>
        </div>
        <ul className="contact-box">
          <li><a href="mailto:biacode2020@gmail.com" class="button">E-mail</a>
            <img className="icon-email" src="https://i.imgur.com/qorTRFp.png"></img></li>
          <li><a href="https://www.linkedin.com/in/biancabiagioni/" class="button">LinkedIn</a>
            <img className="icon-linkedin" src="https://i.imgur.com/ySrvm6e.png"></img></li>
          <a href="https://github.com/BiaCode9" class="button">GitHub</a>
          <li><img className="icon-github" src="https://i.imgur.com/xSnqBXy.png"></img></li>
        </ul>
      </div>



    )
  }
}
export default ContactMe





{/* <div className="global">
          <div className="contact-me">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" src="https://i.imgur.com/nEJvNMg.mp4" type="video/mp4">
            </video>
            <div className="contact-container">
              <div className="contact-overlay">

              </div>
              <div className="thanks">
                <h2>Thanks for Stopping By My Page!</h2>
              </div>
              <div className="contact-please">
                <p>Please <span className="contact-me-span"> Contact Me</span> Anytime</p>

              </div>
            </div>


          </div>
        </div> */}
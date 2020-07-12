
import React, { Component } from "react"
import './ContactMe.css';

class ContactMe extends Component {


  render() {
    return (

      <div className="contact-container">
        <a id="contact"></a>
        <div className="contact-form">
          <div className="thanks">
            <h2>Thanks for Stopping By!</h2>
          </div>
          <div className="contact-please">
            <p> <span className="contact-me-span"> Contact Me</span><p></p><span className="anytime-span">Anytime, Anywhere</span> </p>
            <img className="pin-drop" alt="pin-drop" src="https://i.imgur.com/iBeuWht.png"></img>
            <p><span className="get-back-span">I will get back to you</span> <span className="asap-span"> as soon as possible!</span></p>
          </div>

          <div>
            <ul className="contact-box">
              <li>
                <a href="mailto:biacode2020@gmail.com" target="_blank"><img className="icon-email" alt="icon-email" src="https://i.imgur.com/qorTRFp.png"></img></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/biancabiagioni/" target="_blank"><img className="icon-linkedin" alt="icon-linkedin" src="https://i.imgur.com/ySrvm6e.png"></img></a>
              </li>
              <li>
                <a href="https://github.com/BiaCode9" target="_blank"><img className="icon-github" alt="icon-github" src="https://i.imgur.com/xSnqBXy.png"></img></a>
              </li>
              <li>
                <a href="https://docdro.id/QGc2HAm" target="_blank"><img className="icon-resume" alt="icon-resume" src="https://i.imgur.com/tGjhB2E.png"></img></a>
              </li>
            </ul>
          </div>
        </div>
      </div>





    )
  }
}
export default ContactMe
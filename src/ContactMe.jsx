import React, { Component } from "react";
import "./ContactMe.css";

class ContactMe extends Component {
  render() {
    return (
      <div className="contact-container">
        <a id="contact"></a>
        <div className="contact-form">
          {/* <div className="thanks">
            <h2></h2>
          </div>
          <div className="contact-please"> */}
          <div className="contact-aa">
            <p>
              <h1 className="contact-me-span">CONTACT ME</h1>
            </p>
            <p>
              <span className="anytime">Anytime</span>
              <span className="anywhere-span">Anywhere</span>
            </p>
            <img
              className="pin-drop"
              alt="pin-drop"
              src="https://i.imgur.com/Q3iqEHG.png"
            />
            {/* <img src-="https://i.imgur.com/8LA4tO7.jpg"/> */}
            <div className="contact-box">
              <ul className="list">
                <li className="link-list">
                  <a href="mailto:info@biabia.dev" target="_blank">
                    <img
                      className="icon-email"
                      alt="icon-email"
                      src="https://i.imgur.com/qorTRFp.png"
                    />
                  </a>
                </li>
                <li className="link-list">
                  <a
                    href="https://www.linkedin.com/in/biancabiagioni/"
                    target="_blank"
                  >
                    <img
                      className="icon-linkedin"
                      alt="icon-linkedin"
                      src="https://i.imgur.com/ySrvm6e.png"
                    />
                  </a>
                </li>
                <li className="link-list">
                  <a href="https://github.com/BiaCode9" target="_blank">
                    <img
                      className="icon-github"
                      alt="icon-github"
                      src="https://i.imgur.com/xSnqBXy.png"
                    />
                  </a>
                </li>
                <li className="link-list">
                  <a href="tel:9172677597" target="_blank">
                    <img
                      className="icon-tele"
                      alt="icon-tele"
                      src="https://i.imgur.com/wFAd9W5.png"
                    />
                  </a>
                </li>
                <li className="link-list">
                  <a
                    href="https://drive.google.com/file/d/1pLr41Q1JnO5FyjAiptE_-ViwWenGWBY2/view"
                    target="_blank"
                  >
                    <img
                      className="icon-resume"
                      alt="icon-resume"
                      src="https://i.imgur.com/tGjhB2E.png"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="blinklight"></div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default ContactMe;

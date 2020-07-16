
import React, { Component } from "react"
import "./SkillsTools.css"

class SkillsTools extends Component {
  render() {
    return (

      <div>
        <a id="skills"></a>
        <div className="skills-tools-container">
          <div className="skills-tools-title">
            <h1 >Skills and Tools</h1>
          </div>
          <ul className="about-skill-list">
            <li>HTML<img className="icon-html" alt="icon-html" src='https://i.imgur.com/qH6SiBO.png'></img></li>
            <li>CSS<img className="icon-css" alt="icon-css" src='https://i.imgur.com/ofXoA4z.png'></img></li>
            <li>JAVASCRIPT<img className="icon-js" alt="icon-js" src='https://i.imgur.com/CirWihU.png'></img></li>
            <li>REACT<img className="icon-react" alt="icon-react" src='https://i.imgur.com/B1t5sLV.png'></img></li>
            <li>NODE.JS<img className="icon-node" alt="icon-node" src='https://i.imgur.com/4QHOWz0.png'></img></li>
            <li>RUBY<img className="icon-ruby" alt="icon-ruby" src='https://i.imgur.com/fPT9y93.png'></img></li>
            <li>RUBY ON RAILS<img className="icon-rails" alt="icon-rails" src='https://i.imgur.com/VZtjo4o.png'></img></li>
            <li>POSTGRESQL<img className="icon-sql" alt="icon-sql" src='https://i.imgur.com/g87txwi.png'></img></li>
            <li>MONGO DB<img className="icon-mongo" alt="icon-mongo" src='https://i.imgur.com/kxRpYHA.jpg'></img></li>
            <li>POSTMAN<img className="icon-postman" alt="icon-postman" src='https://i.imgur.com/7uyzkv8.png'></img></li>
            <li>EXPRESS<img className="icon-express" alt="icon-express" src='https://i.imgur.com/0h3DBpx.png'></img></li>
            <li>STORYBOOK<img className="icon-storybook" alt="icon-storybook" src='https://i.imgur.com/3wTjDri.png'></img></li>
            <li>PHOTOSHOP<img className="icon-photoshop" alt="icon-photoshop" src='https://i.imgur.com/spVNuCw.png'></img></li>
            <li>CREATIVE CLOUD<img className="icon-adobe" alt="icon-adobe" src='https://i.imgur.com/G367NGy.png'></img></li>
            <li>HEROKU<img className="icon-heroku" alt="icon-heroku" src='https://i.imgur.com/0fFRcPg.png'></img></li>
            <li>NETLIFY<img className="icon-netlify" alt="icon-netlify" src='https://i.imgur.com/apSr06z.jpg'></img></li>
            <li>SURGE<img className="icon-surge" alt="icon-surge" src='https://i.imgur.com/PCk4lh6.jpg'></img></li>
          </ul>
        </div>
      </div>
    )
  }
}



export default SkillsTools


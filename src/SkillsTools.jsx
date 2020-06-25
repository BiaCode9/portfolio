
import React, { Component } from "react"
import "./SkillsTools.css"

class SkillsTools extends Component {
  render() {
    return (

      <container>
        <div className="skills-tools-container">
          <div className="skills-tools-title">
            <h2>Skills and Tools</h2>
          </div>
          <ul className="about-skill-list">
            <li><img className="icon-html" src='https://i.imgur.com/OgOuZHu.png'></img></li>
            <li><img className="icon-css" src='https://i.imgur.com/ofXoA4z.png'></img></li>
            <li><img className="icon-js" src='https://i.imgur.com/CirWihU.png'></img></li>
            <li><img className="icon-react" src='https://i.imgur.com/B1t5sLV.png'></img></li>
            <li><img className="icon-node" src='https://i.imgur.com/4QHOWz0.png'></img></li>
            <li><img className="icon-ruby" src='https://i.imgur.com/fPT9y93.png'></img></li>
            <li><img className="icon-rails" src='https://i.imgur.com/izjAdkv.png'></img></li>
            <li><img className="icon-sql" src='https://i.imgur.com/ybyrJOX.png'></img></li>
            <li><img className="icon-mongo" src='https://i.imgur.com/kxRpYHA.jpg'></img></li>
            <li><img className="icon-postman" src='https://i.imgur.com/7uyzkv8.png'></img></li>
            <li><img className="icon-express" src='https://i.imgur.com/0h3DBpx.png'></img></li>
            <li><img className="icon-storybook" src='https://i.imgur.com/3wTjDri.png'></img></li>
            <li><img className="icon-adobe" src='https://i.imgur.com/G367NGy.png'></img></li>
            <li><img className="icon-netlify" src='https://i.imgur.com/apSr06z.jpg'></img></li>




          </ul>

        </div>
      </container>

    )
  }
}



export default SkillsTools


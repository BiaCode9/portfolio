import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <>
        <a id="projects"></a>

        <div className="projects-name">
          <h1>PROJECTS</h1>
        </div>
        <div className="parent-project">
          <section className="all-projects">


            <div className="amazon-project-container">
              <div className="project-title">
                <h2>Amazon Clone</h2>
              </div>
              {/* <div className='img-container'> */}
              <img
                className="project-img"
                alt="amazon-clone"
                src="https://i.imgur.com/SmvjiEO.png"
              ></img>
              {/* </div> */}
              <div className="project-description">
                <p>
                  This is a full-stack clone of Amazon's website. A project I
                  completed on my own implementing MERN stack with Stripe
                  functionality.
                </p>
              </div>
              <div className="tech-description">
                <p>
                  React.js | JSON | Axios | Animation | MongoDB | Express |
                  Node.js | Stripe | Firebase |{" "}
                </p>
              </div>
              <div className="buttons">
                <div className="project-url">
                  <a href="https://clone-79dcf.web.app/" class="button">
                    Website
                  </a>
                </div>  
                <div className="github-url">
                  <a
                    href="https://github.com/BiaCode9/amazon-clone"
                    class="button"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            <div className="instacart-project-container">
              <div className="project-title">
                <h2>InstaCart-Costco</h2>
              </div>
              {/* <div className='img-container'> */}
              <img
                className="project-img-instacart"
                alt="instacart-clone-app"
                src="https://media.giphy.com/media/MF1XrtS1F0YrC21R3K/giphy.gif"
              ></img>
              {/* </div> */}
              <div className="project-description">
                <p>
                  A re-creation of the Instacart-Costco website and mobile
                  application. Instacart is a grocery delivery and pick-up
                  service. Worked on a team consisting of 4 other software
                  engineers and 3 user experience (UX/UI) designers.
                </p>
              </div>
              <div className="tech-description">
                <p>
                  React.js | Axios | Node.js | Express | Mongo DB | Mongoose |
                  JSON | bcrypt | Heroku | Surge
                </p>
              </div>
              <div className="buttons">
                <div className="project-url">
                  <a href="http://instacart-costco.surge.sh/" class="button">
                    Website
                  </a>
                </div>
                <div className="github-url">
                  <a
                    href="https://github.com/BiaCode9/Instacart-Costco"
                    class="button"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            <div className="restaurant-demo-container">
              <div className="project-title">
                <h2>Restaurant Website Demo</h2>
              </div>
              {/* <div className='img-container'> */}
              <img
                className="project-img"
                alt="restaurant-demo"
                src="https://i.imgur.com/cXKZjGm.png"
              ></img>
              {/* </div> */}
              <div className="project-description">
                <p>
                  A full-package restaurant website demo from scratch that is fully customizable from content to design to development.  Includes high-resolution photos representing the quality of both food and atmosphere, engaging descriptions, unique attention-grabbing elements that flow throughout the page, original menu or can import your own, theme to match your restaurant's style, online ordering, contact information and reservations.  I am here to bring your vision to life and customers through your door.
                </p>
              </div>
              <div className="tech-description">
                <p>
                  Wordpress | Hosting | Google Analytics | Jetpack Security | Integrated Online Ordering Apps
                </p>
              </div>
              <div className="buttons">
                <div className="project-url">
                  <a href="https://yourwebsitehere.biz" class="button">
                    Website
                  </a>
                </div>
                {/* <div className="github-url">
                  <a
                    href="https://yourwebsitehere.biz"
                    class="button"
                  >
                    Github
                  </a>
                </div> */}
              </div>
            </div>


            <div className="insurance-container">
              <div className="project-title">
                <h2>Insurance Website</h2>
              </div>
              {/* <div className='img-container'> */}
              <img
                className="project-img"
                alt="insurance-website"
                src="https://media.giphy.com/media/hV5agfATMhWtPxNDq0/giphy-downsized-large.gif"
              ></img>
              {/* </div> */}
              <div className="project-description">
                <p>
                  An interactive, customized website for a life insurance company built to generate leads and enable direct live chat, booking, instant quote, contact form, and social media integration. It is desktop, tablet, and mobile responsive.  An included blog page increases your search engine visibility and furthers client outreach.  A pop-up is triggered upon exiting the website where we can include a call-to-action, timely offer, or specific message intended to grab the visitor's attention one last time. 
                </p>
              </div>
              <div className="tech-description">
                <p>
                  Wordpress | Hosting | Responsive | Lead Generation | Search Engine Optimization (SEO) | Blog | Animation | Instant Quote | Pop-Up | Live Chat | Direct Booking | Customer Relationship Mangement (CRM)
                </p>
              </div>
              <div className="buttons">
                <div className="project-url">
                  <a href="https://insuringfamilies.com" class="button">
                    Website
                  </a>
                </div>
                {/* <div className="github-url">
                  <a
                    href="https://yourwebsitehere.biz"
                    class="button"
                  >
                    Github
                  </a>
                </div> */}
              </div>
            </div>



            <div className="portfolio-container">
              <div className="project-title">
                <h2>Insurance Website</h2>
              </div>
              {/* <div className='img-container'> */}
              <img
                className="project-img"
                alt="portfolio-website"
                src="https://media.giphy.com/media/hV5agfATMhWtPxNDq0/giphy-downsized-large.gif"
              ></img>
              {/* </div> */}
              <div className="project-description">
                <p>
                  An interactive, customized website for a life insurance company built to generate leads and enable direct live chat, booking, instant quote, contact form, and social media integration. It is desktop, tablet, and mobile responsive.  An included blog page increases your search engine visibility and furthers client outreach.  A pop-up is triggered upon exiting the website where we can include a call-to-action, timely offer, or specific message intended to grab the visitor's attention one last time. 
                </p>
              </div>
              <div className="tech-description">
                <p>
                  Wordpress | Hosting | Responsive | Lead Generation | Search Engine Optimization (SEO) | Blog | Animation | Instant Quote | Pop-Up | Live Chat | Direct Booking | Customer Relationship Mangement (CRM)
                </p>
              </div>
              <div className="buttons">
                <div className="project-url">
                  <a href="https://schoengold.com" class="button">
                    Website
                  </a>
                </div>
                {/* <div className="github-url">
                  <a
                    href="https://yourwebsitehere.biz"
                    class="button"
                  >
                    Github
                  </a>
                </div> */}
              </div>
            </div>




          
            <div className="ins-landing-container">
              <div className="project-title">
                <h2>Landing Page</h2>
              </div>
              {/* <div className='img-container'> */}
              <img
                className="project-img"
                alt="ins-landing-website"
                src="https://media.giphy.com/media/vboLqIWbtVE7Ic9Yjp/giphy-downsized-large.gif"
              ></img>
              {/* </div> */}
              <div className="project-description">
                <p>
                  A standalone web page created specfically for marketing your business and collecting leads.  It ensures that the vistor lands directly on an enaging main hero shot encouraging and guiding toward a single call-to -action; in this instant it is a button to 'Book an Appointment' which directly connects to your calendar.  The landing page is designed to clearly highlight the company or individual's compelling value and benefits in order get the desired conversion. 
                </p>
              </div>
              <div className="tech-description">
                <p>
                  Wordpress | Responsive | Call-to-action | Direct Booking | Instant Quote | Lead Generation
                </p>
              </div>
              <div className="buttons">
                <div className="project-url">
                  <a href="https://bestwholetermlife.com" class="button">
                    Website
                  </a>
                </div>
                {/* <div className="github-url">
                  <a
                    href="https://yourwebsitehere.biz"
                    class="button"
                  >
                    Github
                  </a>
                </div> */}
              </div>
            </div>



            <div className="instabook-project-container">
              <div className="project-title">
                <h2>InstaBook</h2>
              </div>
              {/* <div className='img-container'> */}
              <img
                className="project-img"
                alt="instabook-app"
                src="https://i.imgur.com/j18uPq7.png"
              ></img>
              {/* </div> */}
              <div className="project-description">
                <p>
                  InstaBook is a real-time job post and search platform for
                  last-minute job openings. Users who are online or signed-up
                  will get real-time job alerts for those posts that match their
                  job description profile. (*Launching Soon*)
                </p>
              </div>
              <div className="tech-description">
                <p>
                  React.js | Ruby on Rails | Axios | PostgresSQL | JSON | bcrypt
                  | Heroku | Surge
                </p>
              </div>
              <div className="buttons">
                <div className="project-url">
                  <a href="http://theinstabook.surge.sh/" class="button">
                    Website
                  </a>
                </div>
                <div className="github-url">
                  <a
                    href="https://github.com/BiaCode9/InstaBook"
                    class="button"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            

            <div className="mm-project-container">
              <div className="project-title">
                <h2>Music Trivia Mayhem</h2>
              </div>
             
              <img
                className="project-img"
                alt="music-app"
                src="https://i.imgur.com/gIFT77p.png"
              ></img>
              
              <div className="project-description">
                <p>
                  Music Triva Mayhem is a music trivia website that challenges
                  the user with interesting and unknown facts about the music
                  industry.
                </p>
              </div>
              <div className="tech-description">
                <p>
                  HTML5 | CSS3 | Javascript | Axios | RESTful API | DOM | Github{" "}
                </p>
              </div>
              <div className="buttons">
                <div className="project-url">
                  <a
                    href="https://pages.git.generalassemb.ly/BiaCode2020/Music-Trivia-Mayhem/"
                    class="button"
                  >
                    Website
                  </a>
                </div>
                <div className="github-url">
                  <a
                    href="https://github.com/BiaCode9/Music-Trivia-Mayhem"
                    class="button"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Project;

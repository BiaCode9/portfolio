import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <>
        <a id="projects"></a>

        <div className="projects-name">
          <h1>SOME PROJECTS</h1>
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
                  This is a full-stack clone of Amazon's website completed
                  on my own implementing MERN stack with Stripe
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
                  application, a grocery delivery and pick-up
                  service. Managed a team of 4 software
                  engineers and 3 UX/UI designers.
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
                <h2>Restaurant Demo</h2>
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
                  A restaurant website demo that includes high-resolution photos representing your own branding and the quality of both food and atmosphere, engaging descriptions, animation, original menu or can import your own, online ordering, and reservation booking.  I am here to bring your vision to life and customers through your door.
                </p>
              </div>
              <div className="tech-description">
                <p>
                  Wordpress | Hosting | Google Analytics | Jetpack Security | Integrated Online Ordering Apps | Reservation Form
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
                <h2>Insurance</h2>
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
                  An interactive, customized website for a life insurance company built to generate leads and enable direct live chat, booking, instant quote, contact form, and social media integration.  A pop-up is triggered upon exiting the website that includes a call-to-action, timely offer, or specific message intended to grab the visitor's attention one last time.
                </p>
              </div>
              <div className="tech-description">
                <p>
                  Wordpress | Hosting | Responsive | Lead Generation | Search Engine Optimization (SEO) | Blog | Instant Quote | Pop-Up | Live Chat | Direct Booking | Customer Relationship Mangement (CRM)
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



            <div className="chiro-container">
              <div className="project-title">
                <h2>Medical</h2>
              </div>
              {/* <div className='img-container'> */}
              <img
                className="project-img"
                alt="chiro-website"
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDZlZDI0YjY4YjljYzQ0MGJkOGI2M2I5MjBkNGQ4MDhlY2Y4NjVjMyZjdD1n/9uTxdWmZnM2d0GQG6L/giphy.gif"
              ></img>
              {/* </div> */}
              <div className="project-description">
                <p>
                An animated, customized website for a chiropractor and physical therapy practice built to attract new patients with an explanation of services and a request appointment link.  The News page increases search engine visibility and keeps patients informed.
                </p>
              </div>
              <div className="tech-description">
                <p>
                  Wordpress | Responsive | Call-to-Action | Request Booking | Direct Contact | Lead Generation | Social Media Integration
                </p>
              </div>
              <div className="buttons">
                <div className="project-url">
                  <a href="https://bocainjuryandwellness.com" class="button">
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


            <div className="atny-container">
              <div className="project-title">
                <h2>Membership</h2>
              </div>
              {/* <div className='img-container'> */}
              <img
                className="project-img"
                alt="chiro-website"
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjg1MTgxNGZhZDhmNDJkZTFjMjI5ZmFiNzEzYmU5ZGI1NjA4MDBiZiZjdD1n/4JpkTZy3wIwkT2plHO/giphy.gif"
              ></img>
              {/* </div> */}
              <div className="project-description">
                <p>
                An interactive, customized website for a non-profit membership organization/club to collect dues, post events, provide live calendar of sports and activities, and have new members sign-up.
                </p>
              </div>
              <div className="tech-description">
                <p>
                  Wordpress | Responsive | Call-to-Action | Paypal Integration | Event Blog | Membership Application | Live Calendar 
                </p>
              </div>
              <div className="buttons">
                <div className="project-url">
                  <a href="https://atnynyc.com" class="button">
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
                <h2>Portfolio</h2>
              </div>
              {/* <div className='img-container'> */}
              <img
                className="project-img"
                alt="portfolio-website"
                src="https://media.giphy.com/media/Dcry0pulzhEUer0G1g/giphy.gif"
              ></img>
              {/* </div> */}
              <div className="project-description">
                <p>
                A customized portfolio website for the creative director of New Channel 12 NY built to showcase his work with pop-up video integration, bio, and blog with option for social media sharing and comment interaction.
                </p>
              </div>
              <div className="tech-description">
                <p>
                Wordpress | Hosting | Responsive | Blog | Video Integration | Pop-Up | Lightbox | Social Media Integration
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
                    href="https://github.com/BiaCode9/InstaBook"
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
                  A standalone web page created specfically for marketing your business' compelling value and lead collection.  It ensures the vistor lands directly on an enaging main hero shot encouraging and guiding toward a single call-to-action, "Book an Appointment" which directly connects to your calendar. 
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
            

            {/* <div className="mm-project-container">
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
            </div> */}
          </section>
        </div>
      </>
    );
  }
}

export default Project;

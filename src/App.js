import React from 'react';
import './App.css';
import Project from './Project'
import Header from './Header'
import Footer from './Footer'
import AboutMe from './AboutMe'

function App() {
  return (
    <div className="header">
      <Header
        className="navBar"
        li1="Home"
        li2="Projects"
        li3="Contact"
        name="Hi, I'm Bianca Biagioni!"
      />
      <div className="about-me">


      </div>

      <main>

        <AboutMe />


        <Project />


      </main>

      <Footer

      />
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Project from './Project'
import Header from './Header'
import Footer from './Footer'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import SkillsTools from './SkillsTools'

function App() {
  return (
    <body>
      {/* <div class="icon"><span></span><span></span><span></span></div> */}

      
      <div >

        <Header />

        <main>

          <AboutMe />

          <SkillsTools />

          <Project />

          <ContactMe />

        </main>

        <Footer />

      </div>


    </body>
  );
}

export default App;
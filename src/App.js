import React from 'react';
import './App.css';
import Project from './Project'
import Header from './Header'
import Footer from './Footer'
import AboutMe from './AboutMe'

function App() {
  return (
    <div >
      <Header
      />


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
import React from 'react';
import './App.css';
import Project from './Project'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header
        className="navBar"
        name="BIANCA BIAGIONI"
        li1="Home"
        li2="Projects"
        li3="Contact"
      />
      <div className="about-me">


      </div>

      <main>
        <div className="projects" />
        <Project className="music-trivia-mayhem"
          title='Music Trivia Mayhem'
          img='https://i.imgur.com/gIFT77p.png'
        // description='A Baltimore detective and a medical examiner must work together when the witnesses of a long-ago crime become the victims of a deranged killer in this gripping romantic suspense novel.'
        />

        <Project
          title='Instacart-Costco'
        // img='https://prodimage.images-bn.com/pimages/9780451233578_p0_v3_s550x406.jpg'
        // description='A Baltimore detective and a medical examiner must work together when the witnesses of a long-ago crime become the victims of a deranged killer in this gripping romantic suspense novel.'
        />

        <Project
          title='InstaBook'
        // img='https://images.secondsale.com/images/6aaf600d981b0088c0bb034790d8cd2d.jpg'
        // description="Destiny of Souls. A pioneer in uncovering the secrets of life, internationally recognized spiritual hypnotherapist Dr. Michael Newton takes you once again into the heart of the spirit world. His groundbreaking research was first published in the bestselling Journey of Souls, the definitive study on the afterlife."
        />
      </main>

      <Footer

      />
    </div>
  );
}

export default App;
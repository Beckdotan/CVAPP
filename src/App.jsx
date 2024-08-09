import React from 'react';
import Header from './components/Header';
import AskAnything from './components/AskAnything';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import liner from './assets/linerGif.gif'; // Import the logo image
import Data from './components/Data';


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-darkBackground text-lightGray">
      <Header />
      <section id="ask-anything" className="pt-16"> {/* Add padding to offset fixed header */}
        <AskAnything />
      </section>
      <img className="h-25 w-50 pt-8 bg-darkBackground" src={liner} alt="Logo" />
      <section id="about-me" className="">
        <AboutMe />
      </section>
      <section id="projects" className="">
        <Projects />
      </section>
      <Data />
    </div>
  );
}

export default App;

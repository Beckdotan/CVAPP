import React from 'react';
import Header from './components/Header';
import AskAnything from './components/AskAnything';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import liner from './assets/liner.png'; // Import the logo image


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-darkBackground text-lightGray">
      <Header />
      <AskAnything />
      <img className="h-25 w-50" src={liner} alt="Logo" />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;

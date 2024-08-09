import React from 'react';
import Header from './components/Header';
import AskAnything from './components/AskAnything';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-darkBackground text-lightGray">
      <Header />
      <AskAnything />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;

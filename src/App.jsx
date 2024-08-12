import React from 'react';
import Header from './components/Header';
import AskAnything from './components/AskAnything';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import liner from './assets/linerGif.gif';
import Footer from './components/Footer'; 



function App() {
  return (
    <div className="min-h-screen flex flex-col bg-darkerColor text-lightGray ">
      <Header />
      <section id="ask-anything" className="pt-16">
        <AskAnything />
      </section>
      <img className="h-25 w-50 pt-8 bg-darkerColor" src={liner} alt="liner" />
      <section id="projects" className="">
        <Projects />
      </section>
      <section id="about-me" className="bg-darkerColor">
        <AboutMe />
      </section>
      <Footer />
    </div>
  );
}

export default App;

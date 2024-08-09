import React, { useState } from 'react';

function AskAnything() {
  const [question, setQuestion] = useState('');

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAskClick = () => {
    console.log('User question:', question);
  };
  
  return (
    <section id="ask-anything" className="py-20 bg-darkBackground text-lightGray relative">
      <div className="container mx-auto px-8">
        <h2 className="text-6xl font-bold text-center text-skyBlue mb-4 py-4 pt-8">
          Discover My Expertise In Real-Time
        </h2>
        <p className="text-2xl text-center mb-8">
          Ask me anything about my professional background, skills, or projects.<br />
          Powered by a state-of-the-art LLM trained on my personal data, this feature lets you interact with an AI that knows me inside out.<br />
        </p>

        <p className="text-2xl text-center mb-8 text-skyBlue">
          Simply type your question below and click 'Ask'!
        </p>
        <div className="text-center">
          <input
            type="text"
            value={question}
            onChange={handleInputChange}
            placeholder="Type your question here..."
            className="text-xl h-16 w-full md:w-2/3 px-4 py-2 rounded-full bg-darkerColor text-lightGray mb-4 focus:outline-none focus:ring-2 focus:ring-skyBlue transition duration-300"
          />
          <br />
          <button
            onClick={handleAskClick}
            className="text-xl text-skyBlue px-6 py-2 rounded-full hover:bg-skyBlue hover:text-darkBackground border border-skyBlue transition duration-300"
          >
            Ask
          </button>
        </div>
        
        {/* Cards Container */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 overflow-hidden">
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-rotate-circle">
              <div className="flex items-center justify-center">
                <div className="bg-lightGray text-darkBackground px-6 py-4 rounded-lg mx-4">Question 1</div>
                <div className="bg-lightGray text-darkBackground px-6 py-4 rounded-lg mx-4">Question 2</div>
                <div className="bg-lightGray text-darkBackground px-6 py-4 rounded-lg mx-4">Question 3</div>
                <div className="bg-lightGray text-darkBackground px-6 py-4 rounded-lg mx-4">Question 4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AskAnything;

import React, { useState } from 'react';
import CardRow from './CardRow';

function AskAnything() {
  const [question, setQuestion] = useState('');

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAskClick = () => {
    // This is where you'd integrate with the LLM to handle the user's question.
    console.log('User question:', question);
  };
  
  return (
    <section id="ask-anything" className="py-20 bg-darkBackground text-lightGray">
      <div className="container mx-auto px-8">
        <h2 className="text-6xl font-bold text-center text-cyanBlue mb-4 py-4 pt-8">
          Discover My Expertise In Real-Time
        </h2>
        <p className="text-2xl text-center mb-8">
          Ask me anything about my professional background, skills, or projects.<br />
          Powered by a state-of-the-art LLM trained on my personal data, this feature lets you interact with an AI that knows me inside out.<br />
        </p>

        <p className="text-2xl text-center mb-8 text-cyanBlue">
        Simply type your question below and click 'Ask'!
        </p>
        <div className="text-center">
          <input
            type="text"
            value={question}
            onChange={handleInputChange}
            placeholder="Type your question here..."
            className=" text-xl h-16 w-full md:w-2/3 px-4 py-2  rounded-full bg-darkerColor text-lightGray mb-4 focus:outline-none focus:ring-2 focus:ring-cyanBlue  transition duration-300"
          />
          <br />
          <button
            onClick={handleAskClick}
            className=" text-xl text-cyanBlue  px-6 py-2 rounded-full hover:bg-cyanBlue hover:text-darkBackground border border-cyanBlue transition duration-300"
          >
            Ask
          </button>
        </div>
        <CardRow/>
      </div>
    </section>
  );
}

export default AskAnything;

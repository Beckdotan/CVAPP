import React, { useState } from 'react';
import CardRow from './CardRow';
import axios from 'axios';

function AskAnything() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAnswer, setShowAnswer] = useState(true); // State to manage answer visibility


  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleCloseAnswer = () => {
    setShowAnswer(false); // Hide the answer box when the close button is clicked
  }; 


  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setError('');
    setAnswer('');

    try {
        const response = await axios.post('/api/ask', { question });
        setAnswer(response.data.answer);
        setShowAnswer(true); // Show the answer box when a new answer is received
    } catch (err) {
        setError('Failed to get a response. Please try again.');
    } finally {
        setLoading(false);
    }
};

  
  return (
    <section id="ask-anything" className=" bg-darkBackground text-lightGray">
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
          <button onClick={askQuestion} disabled={loading || !question.trim()} className=" text-xl text-cyanBlue  px-6 py-2 rounded-full hover:bg-cyanBlue hover:text-darkBackground border border-cyanBlue transition duration-300"
>
                {loading ? 'Asking...' : 'Ask'}
          </button>
          {error && (<p className="text-red-500 mt-4">{error}</p>)}
          {showAnswer && answer && (
            <div className="relative mt-4 p-4 border border-lightGray rounded-lg text-left shadow-lg">
            <button 
              onClick={handleCloseAnswer} 
              className="absolute top-2 right-2 text-coolGray hover:text-lightGray"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <strong className="block font-semibold">Answer:</strong>
            <p>{answer}</p>
          </div>)}

          
        </div>
        <CardRow/>
      </div>
    </section>
  );
}

export default AskAnything;

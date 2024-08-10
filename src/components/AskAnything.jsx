import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardRow from './CardRow';
import axios from 'axios';

function AskAnything() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
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

  const handleCloseAnswer = () => {
    setShowAnswer(false); // Hide the answer box when the close button is clicked
  };

  return (
    <section id="ask-anything" className=" text-lightGray">
      <div className="container mx-auto px-8">
        <h2 className="text-6xl font-bold text-center text-cyanBlue mb-4 py-4 pt-8">
          Discover My Expertise <br /> 
          <p className= "text-yellow-400">In Real-Time</p>
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
            className="text-xl h-16 w-full md:w-2/3 px-4 py-2 rounded-full bg-darkBackground text-lightGray mb-4 focus:outline-none focus:ring-2 focus:ring-cyanBlue transition duration-300"
          />
          <br />
          <button 
            onClick={askQuestion} 
            disabled={loading || !question.trim()} 
            className="text-xl text-cyanBlue px-6 py-2 rounded-full hover:bg-cyanBlue hover:text-darkBackground border border-cyanBlue transition duration-300"
          >
            {loading ? 'Asking...' : 'Ask'}
          </button>
          {error && (
            <p className="text-red-500 mt-4">{error}</p>
          )}
          <AnimatePresence>
  {showAnswer && answer && (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative mt-4 p-4 border border-lightGray rounded-lg text-left shadow-lg z-10 flex items-start space-x-4"
    >
      <img
        src="src/assets/profile.png" // Replace with the actual path to your profile image
        alt="Profile"
        className="h-10 w-10 rounded-full"
      />
      <div>
        <p>{answer}</p>
      </div>
      <button 
        onClick={handleCloseAnswer} 
        className="absolute top-2 right-2 text-coolGray hover:text-lightGray"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  )}
</AnimatePresence>
        </div>
        <div className="hidden md:block relative">
            <CardRow/>
        </div>  
      </div>
    </section>
  );
}

export default AskAnything;

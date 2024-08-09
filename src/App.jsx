import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import Header from './components/Header';


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-darkBackground text-lightGray">
      <Header />
      <main className="flex-1 flex justify-center items-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl text-skyBlue">Ask Me Anything</h1>
          <p className="mt-4 text-lightGray">
            Welcome to the Ask Me Anything page! Feel free to ask any questions.
          </p>
        </div>
      </main>
    </div>
  );
}
export default App;

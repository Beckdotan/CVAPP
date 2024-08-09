import React from 'react';

const Header = () => {
  return (
    <header className="bg-darkBackground p-4 flex justify-center">
      {/* Navigation Tabs */}
      <nav className="flex space-x-8">
        <a href="#" className="tab-link">Ask Me Anything</a>
        <a href="#" className="tab-link">About Me</a>
        <a href="#" className="tab-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

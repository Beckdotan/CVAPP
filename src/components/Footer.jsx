import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaCamera } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-darkerColor shadow-sm bg-opacity-70 backdrop-blur-sm shadow-white text-lightSky py-2 fixed bottom-0 w-full flex justify-between items-center px-8 md:px-8">
      <div className="text-sm text-co">
        Dotan Beck
        <a className='px-4 text-xs text-coolGray opacity-80'> Last Updated: 8.2024 </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="tel:+972526978081" className=" hover:text-cyanBlue px-1">
          <FaPhone />
        </a>
        <a href="mailto:dotan.beck@gmail.com" className=" hover:text-cyanBlue px-1">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/dotanbeck/" target="_blank" rel="noopener noreferrer" className=" hover:text-cyanBlue px-1">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Beckdotan" target="_blank" rel="noopener noreferrer" className=" hover:text-cyanBlue px-1">
          <FaGithub />
        </a>
        <a href="https://dotcomphotos.online" target="_blank" rel="noopener noreferrer" className=" hover:text-cyanBlue px-1">
          <FaCamera />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

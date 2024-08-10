import React from 'react';
import { motion } from 'framer-motion';

function AboutMe() {
  return (
    <section id="about-me" className="py-20 text-lightGray">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-shrink-0 md:w-1/3 mb-6 md:mb-0"
          >
            <motion.img
              src="src/assets/me.png" // Replace with your profile image URL
              alt="Profile"
              className="w-4/5 h-140  mx-auto md:mx-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-2/3 text-center md:text-left"
          >
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h2>
            <p className="text-lg leading-relaxed">
              As a Data Scientist and Full Stack Developer, I have extensive experience in full lifecycle projects specializing in LLM workflows with RAG, Angular, .NET, MSSQL, and AWS.<br />
              
              My passion lies in solving real-world problems through innovative applications of LLM technologies.<br />
              
              <br />
              
              At ECO-OS, I lead the design, implementation, and deployment of cutting-edge features in web applications, leveraging my expertise in LLMs to create frameworks that significantly reduce client response times and provide actionable decarbonization insights. 
              My work in developing precise algorithms for environmental impact projections has resulted in substantial savings for our clients.<br />
              <br />
               
              In addition to my technical acumen, I have a proven track record of engineering scalable, high-availability infrastructures in AWS and optimizing SQL queries for improved performance. Leading a talented programming team, I prioritize continuous learning and proactive problem-solving. 
              My educational background includes a B.Sc. in Computer Science & Entrepreneurship from Reichman University, where I graduated with a GPA of 90, and ongoing studies for an M.Sc. in Computer Science at the Open University. 
              My journey also includes notable achievements such as developing an LLM-based web application for the Master-chef brand during the Schestowitz Honors Program.<br /><br />
              Outside of my professional endeavors, I am a world-winning nature photographer and a former handball player for the Israeli national youth team. I am fluent in both Hebrew and English and always eager to connect with fellow professionals and explore new opportunities.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="https://www.linkedin.com/in/your-linkedin-profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:underline mr-4"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/your-github-profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:underline mr-4"
              >
                GitHub
              </a>
              <a 
                href="https://github.com/your-github-profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:underline"
              >
                Photography Webiste
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

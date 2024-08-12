import React from 'react';
import { motion } from 'framer-motion';
import masterChefImg from '../assets/masterChefImg.jpg';
import MlImg from '../assets/Ml.jpg';
import ClimateImg from '../assets/Climate.jpg';
import cvAgentImg from '../assets/cvagent.jpg';

const projects = [
  {
    title: 'CSRD AI Assistant',
    description: 'Empowering companies to efficiently comply with CSRD regulations through advanced AI workflows, leveraging RAG, LLMs, and seamless integrations.',
    TechStack: 'RAG, LLMs, Angular, .Net, AWS Bedrock, Py2PDF, AWS S3 and ec2, Python, C#, LangChain',
    image: ClimateImg,
    link: 'https://www.ecoos.co/csrd'
  },
  {
    title: 'CV website',
    description: 'Revolutionizing the traditional CV experience by allowing users to interact with an AI-powered agent, providing personalized insights and information about my background.',
    TechStack: 'OpenAI, React, Vite, Express, Tailwind',
    image: cvAgentImg,
    link: 'https://link-to-your-new-project.com'
  },
  {
    title: 'Master Chef',
    description: 'Enhancing culinary creativity by guiding users in crafting delicious meals with AI-driven recommendations and master-chef products.',
    TechStack: 'Python, OpenAI API',
    image: masterChefImg, 
    link: 'https://github.com/Beckdotan/Master-chef-chat'
  },
  {
    title: 'ML Algorithms Implementations',
    description: 'Exploring fundamental machine learning techniques through practical implementations of classic algorithms like decision trees and K-means.',
    TechStack: 'Python, Jupyter Notebooks',
    image: MlImg, 
    link: 'https://github.com/Beckdotan/ML-Course'
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-darkerColor text-cyanBlue">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-darkBackground bg-opacity-50 rounded-lg overflow-hidden shadow-sm shadow-coolGray flex flex-col"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-bottom"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg mb-4 text-lightGray flex-grow">{project.description}</p>
                <p className="text-base mb-4 text-coolGray">Tech Stack: {project.TechStack}</p>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyanBlue hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
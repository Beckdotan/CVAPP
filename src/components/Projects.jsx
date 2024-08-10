import React from 'react';
import { motion } from 'framer-motion';
import masterChefImg from '../assets/masterChefImg.jpg'; // Import the image
import MlImg from '../assets/Ml.jpg'; // Import the image
import ClimateImg from '../assets/Climate.jpg'; // Import the image


const projects = [
  {
    title: 'Master Chef',
    description: 'Helping people create amazing meals with master-chef products using AI-powerd chat. ',
    image: masterChefImg, // Replace with your image path
    link: 'https://github.com/Beckdotan/Master-chef-chat'
  },
  {
    title: 'CSRD AI Assistant',
    description: 'Helping comapnies replay to CSRD regulation using complex worflow including RAG and LLM.',
    image: ClimateImg, // Replace with your image path
    link: 'https://www.ecoos.co/csrd'
  },
  {
    title: 'ML Algorithms Implementations',
    description: 'Implementing classic ML algorithms like decision trees, K-means, linear regression, and more.',
    image: MlImg, // Replace with your image path
    link: 'https://github.com/Beckdotan/ML-Course'
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-darkerColor text-cyanBlue">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-darkBackground  bg-opacity-50 rounded-lg overflow-hidden shadow-sm shadow-coolGray"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-bottom"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg mb-4 text-lightGray">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyanBlue hover:underline"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

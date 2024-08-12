import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Card from './Card';

const cardData = [
    { title: 'Projects', description: "Tell me about the Dotan's main projects" },
    { title: 'Education', description: 'What degrees does Dotan have?' },
    { title: 'Job', description: 'What is Dotan’s employment history?' },
    { title: 'Qualities', description: 'What are Dotan’s best and worst qualities?' },
    { title: 'Job', description: 'What is Dotan looking for in a job?' }
  ];

function CardRow() {
  const controls = useAnimation();
  const [startTime, setStartTime] = useState(Date.now());

  const startAnimation = () => {
    const elapsedTime = (Date.now() - startTime) / 1000;
    const remainingDuration = Math.max(20 - elapsedTime, 0);

    controls.start({
      x: '-50%',
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: remainingDuration,
          ease: 'linear',
        },
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="overflow-hidden relative w-full">
      <p className="text-yellow-400 pt-2 text-left">Most asked questions:</p>
      <motion.div
        className="flex"
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => {
          setStartTime(Date.now());
          startAnimation();
        }}
        style={{ width: '300%' }} // Adjusted width for seamless looping
      >
        {[...cardData, ...cardData, ...cardData].map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-40 px-2 py-6"
            style={{ width: '10%' }} // Adjusted width for each card
          >
            <Card title={card.title} description={card.description} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default CardRow;
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Card from './Card';

const cardData = [
  { title: 'Card 1', description: 'Description for card 1' },
  { title: 'Card 2', description: 'Description for card 2' },
  { title: 'Card 3', description: 'Description for card 3' },
  { title: 'Card 4', description: 'Description for card 4' },
  { title: 'Card 5', description: 'Description for card 5' },
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
      <p className="text-lightGray pt-6 text-center">Most asked questions:</p>
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
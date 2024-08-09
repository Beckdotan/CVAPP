import React from 'react';
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

  const startAnimation = () => {
    controls.start({
      x: '-50%',
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    });
  };

  return (
    <div className="overflow-hidden relative w-full">
    <p className="text-lightGray">Most asked questions:</p>
      <motion.div
        className="flex"
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={startAnimation}
        style={{ width: '300%' }} // Double the width for seamless looping
      >
        {[...cardData, ...cardData, ...cardData].map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-40 px-2 py-6"
            style={{ width: '10%' }} // Each card takes 25% of the container width
          >
            <Card title={card.title} description={card.description} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default CardRow;
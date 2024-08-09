// src/components/CardRow.js
import React from 'react';
import Card from './Card';

const cardData = [
  { title: 'Card 1', description: 'Description for card 1' },
  { title: 'Card 2', description: 'Description for card 2' },
  { title: 'Card 3', description: 'Description for card 3' },
  { title: 'Card 4', description: 'Description for card 4' },
  // Add more cards as needed
];

function CardRow() {
  const duplicatedCards = [...cardData, ...cardData]; // Duplicate the cards array

  return (
    <div className="overflow-hidden relative">
      <div className="flex animate-slide">
        {duplicatedCards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-40 mr-4">
            <Card title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardRow;

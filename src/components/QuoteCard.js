import React from 'react';

function QuoteCard({ card }) {
return (
    card && (
      <div className='DisplayCard'>
        <img src={card.image} alt={card.name} />
        <ul className='cardInfo'>
          <li>
            Name: {card.character}
          </li>
          <li>Quote: {card.quote}</li>
          
        </ul>
      </div>
    )
  );
}

export default QuoteCard;
import React from 'react';

export default function Quote({ quote }) {
  return (
    <div className='quote'>
        <div className="anime">
            {quote.anime}
        </div>
        <blockquote>
            "{quote.quote}"
        </blockquote>
        <dic className="character">
            {quote.character}
        </dic>

    </div>
  )
}

import React from 'react';
import CardsData from '../assets/json/cards.json'

function Card() {
  return (
    CardsData.map((info, i) => {
      const options = info.options;
      return (
        <div className="card" key={i}>
          <div className="card-title">{info.header}</div>
          <div className="card-list">
            <ul>
               {options.map(item => {
                return <li key={item}>{item}</li>
              })}
            </ul>
          </div>
          <div className="card-text">{info.text}</div>
        </div>
      )
     })
  )


}

export default Card


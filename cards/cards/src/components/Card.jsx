import React from 'react';
import CardsData from '../assets/json/cards.json';
import {useState} from 'react';

function Card() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
    <div className="search">
    <input type="text" placeholder='Search by Title' onChange={(event)=> {
      setSearchTerm(event.target.value);
    }} />
    </div>
    {
      CardsData.map((info, i) => {
        const options = info.options;
        if(searchTerm == "") {
          return (
            <div className="card" key={i}>
              <div className="card-title">{info.header}</div>
              <div className="card-list">
                <ul>
                   {options.map((item, key) => {
                    return <li key={key}>{item}</li>
                  })}
                </ul>
              </div>
              <div className="card-text">{info.text}</div>
            </div>
          )  // end return card
        }   // end if
        else if(info.header.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return (
            <div className="card" key={i}>
              <div className="card-title">{info.header}</div>
              <div className="card-list">
                <ul>
                   {options.map((item, key) => {
                    return <li key={key}>{item}</li>
                  })}
                </ul>
              </div>
              <div className="card-text">{info.text}</div>
            </div>
          )
        }  // end else if
        else {
          return (
            <h1>Sorry, nothing is found..</h1>
          )
        }
       })  // end CardsData.map
    }
    </>
  )
}

export default Card





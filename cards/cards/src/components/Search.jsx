import React from 'react';
import {useState} from 'react';
import CardData from '../assets/json/cards.json';
import Card from './Card';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
  <div className="search">
    <input type="text" placeholder='Search...' onChange={(event)=> {
      setSearchTerm(event.target.value);
    }} />
    {CardData.map((value, key)=> {
     if(searchTerm == "") {
       return <Card key={key}/>
     }
   })}
  </div>
  )
}

export default Search
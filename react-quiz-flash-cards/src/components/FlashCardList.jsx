  import React from 'react';
  import Flashard from './Flashcard'
  
  const FlashCardList = ({flashcards}) => {
    return (
      <div className='card-grid'> 
      {flashcards.map(flashcard => {
        return <Flashard flashcard={flashcard} key={flashcard.id}/>
      })}
      </div>
    )
  }
  
  export default FlashCardList
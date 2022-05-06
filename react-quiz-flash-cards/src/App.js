import React, {useState} from 'react';
import './App.css';
import FlashCardList from './components/FlashCardList';

function App() {
  const[flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    
    <FlashCardList flashcards={flashcards}/>
    
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2+2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: 'What color is the sky?',
    answer: 'blue',
    options: [
      'red',
      'green',
      'purple',
      'blue'
    ]
  },
  {
    id: 3,
    question: 'Question 3 ?',
    answer: 'answer',
    options: [
      'answer 2',
      'answer 3',
      'answer',
      'answer 5'
    ]
  }
]

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';
import FlashCardList from './components/FlashCardList';
import axios from 'axios';

function App() {
  const[flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(res => {
       setFlashcards(res.data.results.map((questionItem, index) => {
         const answer = decodeString(questionItem.correct_answer)
         const options = [
           ...questionItem.incorrect_answers.map(a => decodeString(a) ), answer]
         return {
           id: `${index}-${Date.now()}`,
           question: decodeString(questionItem.question),
           answer: answer ,
           options: options.sort(() => Math.random() - .5)
         }
       }))
      })
  },[])

  // fix encoding
  function decodeString(string) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = string
    return textArea.value
  }
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

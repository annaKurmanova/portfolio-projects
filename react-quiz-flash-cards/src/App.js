import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import FlashCardList from './components/FlashCardList';
import axios from 'axios';

function App() {
  const[flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])

  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
    .then(res => {
      setCategories(res.data.trivia_categories)
    })
  }, [])

  useEffect(() => {
 
  },[])

  // fix encoding
  function decodeString(string) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = string
    return textArea.value
  }
  // form
  function handleSubmit(e) {
    e.preventDefault();
    axios
    .get('https://opentdb.com/api.php?amount', {
      params: {
        amount: amountEl.current.value,
        category: categoryEl.current.value
      }
    })
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
  }
  return (
    <>
    <form onSubmit={handleSubmit} className="header">
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select ref={categoryEl} id="category">
          {categories.map(category => {
            return <option value={category.id} key={category.id}>{category.name}</option>
          } )}          
        </select>
      </div>
      <div className="form-group">
      <label htmlFor="amount">Number of Questions</label>
      <input type="number"  id="amount" min="1" step="1" defaultValue={10} ref={amountEl}/>
      </div>
      <div className="form-group">
        <button className="button">Generate</button>
      </div>
    </form>
      <div className="container">
        <FlashCardList flashcards={flashcards}/>
      </div>
    </>
  );
}



export default App;

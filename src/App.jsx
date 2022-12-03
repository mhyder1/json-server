import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:5000/data')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  // },[])

  function getDecks() {
    fetch('http://localhost:5000/decks')
    .then(res => res.json())
    .then(data => setData(data))
  }

  function getCards() {
    fetch('http://localhost:5000/cards')
    .then(res => res.json())
    .then(data => setData(data))
  }

  function addDeck() {
    fetch('http://localhost:5000/decks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"name": "deck "+ Math.random() * 100 + 1})
    })
    .then(res => res.json())
    .then(deck => setData([...data, deck]))
  }
// console.log(data)
  return (
    <div className="App">
      <button onClick={getDecks}>Get decks</button>
      <button onClick={getCards}>Get cards</button>
      <button onClick={addDeck}>Add deck</button>
        {
          data.map(({name, id}) => (
            <p key={id}>{name}</p>
          ))
        }
    </div>
  )
}

export default App

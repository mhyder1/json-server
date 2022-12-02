import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const baseUrl = "https://json-server-chi-nine.vercel.app:5000"
  // useEffect(() => {
  //   fetch('http://localhost:5000/data')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  // },[])

  function getDecks() {
    fetch(baseUrl + '/decks')
    .then(res => res.json())
    .then(data => setData(data))
  }

  function getCards() {
    fetch(baseUrl + '/cards')
    .then(res => res.json())
    .then(data => setData(data))
  }

  return (
    <div className="App">
      <button onClick={getDecks}>Get decks</button>
      <button onClick={getCards}>Get cards</button>
        {
          data.map(item => (
            <p key={item}>{item}</p>
          ))
        }
    </div>
  )
}

export default App

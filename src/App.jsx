import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/data')
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  return (
    <div className="App">
      {
        data.map(name => (
          <p>{name}</p>
        ))
      }
    </div>
  )
}

export default App

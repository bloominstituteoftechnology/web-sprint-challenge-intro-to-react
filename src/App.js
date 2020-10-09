import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import { BASE_URL, API_KEY } from './components/constants/index'

export default function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/character?api_key=${API_KEY}`)
        .then(result => {
            setCharacters(result.data)
        })
        .catch(err => {
            console.log(err)
        })
}, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(ch => {
          return <Character/>
        })
      }
    </div>
  );
}

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card'
import './App.css';

const App = () => {
  const [missions, setMissions] = useState([])
  const URL = `https://api.spacexdata.com/v3/missions`

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        //console.log(response.data)
        setMissions(response.data)
      })
      .catch((err) => console.log('Error: ', err))
  },  [URL])

  return (
    <div className="App">
      <h2>Space X Missions</h2>
      <Card missions={missions} />
    </div>
  )
}

export default App;

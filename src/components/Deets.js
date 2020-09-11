import React, { useState, useEffect } from 'react'
// import { BASE_URL, API_KEY } from '../constants/constants'
import axios from 'axios'

export default function Deets(props) {
  const { characterId, close } = props
  const [deets, setDeets] = useState(null)

  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/people/`)
      .then(res => { setDeets(res.data.results) })
      .catch(err => { debugger }) 
  }, [characterId])

  return (
    <div className='container'>
      <h2>Info:</h2>
      {
        deets &&
        <>
          <p>{deets.name} is {deets.birth_year}</p>
          <p>eye color is {deets.eye_color}</p>
        </>
      }
      <button onClick={close}>Close</button>
    </div>
  )
}
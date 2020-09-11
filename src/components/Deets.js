import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'

export default function Deets(props) {
  const { characterId, close } = props
  const [deets, setDeets] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/characters/${characterId}?api_key=${API_KEY}`)
      .then(res => { setDeets(res.data) })
      .catch(err => { debugger }) 
  }, [characterId])

  return (
    <div className='container'>
      <h2>Details:</h2>
      {
        deets &&
        <>
          <p>{deets.name} is {deets.birth_year}</p>
          <p>eye color is {deets.eye_color}</p>
          {name} likes:
          <ul>
            {
              deets.vehicles.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </>
      }
      <button onClick={close}>Close</button>
    </div>
  )
}
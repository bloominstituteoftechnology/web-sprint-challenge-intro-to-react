// add details here

import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'

export default function Details(props) {
  const { characterId, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/${characterId}`)
      .then(res => { 
          setDetails(res.data) })
      .catch(err => {
           debugger }) // eslint-disable-line
  }, [characterId])

  return (
    <div className='container'>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.species}</p>
          <p>Origin is {details.origin}</p>
      <p> {details.name} is currently {details.status}</p>
         
        </>
      }
      <button onClick={close}>Close</button>
    </div>
  )
}

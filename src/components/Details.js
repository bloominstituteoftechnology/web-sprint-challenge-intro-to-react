import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details(props) {
  const { charId, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/?')
    .then((res) => {
      setDetails(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [charId])

  return (
    <div className='container'>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>Age: {details.age}</p>
          <p>Weight: {details.mass}</p>
          <p>Gender: {details.gender}</p>
          <p>DOB: {details.birth_year}</p>
        </>
      }
      <button onClick={close}>Close</button>
    </div>
  )
}
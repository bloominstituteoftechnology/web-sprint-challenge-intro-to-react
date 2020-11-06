import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details(props) {
  const { personId, close } = props;
  const [details, setDetails] = useState(null)
  const [getId, setGetId] = useState ([])

  setGetId(props.map((item, i) => {
      return <li key={i}>Id</li>
  }))

 useEffect(() => {
     axios.get(`http://swapi.dev/api/people`)
     .then(res => { setDetails(res.data)})
     .catch(err => {
         debugger
     })
 }, [personId])

  return (
    <div className='container'>
        <div>
            {getId((person, index) => (
                <p key={index}>{person.name}</p>
            ))}
        
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>Hair Color: {details.hair_color}</p>
          <p>Hair Color: {details.hair_color}</p>
          <p>Skin Color: {details.skin_color}</p>
          <p>Eye Color: {details.eye_color}</p>
          <p>Birth Year: {details.birth_year}</p>
          <p>Gender: {details.gender}</p>
        </>
      }
      </div>
      <button onClick={close}>Close</button>
    </div>
  )
}
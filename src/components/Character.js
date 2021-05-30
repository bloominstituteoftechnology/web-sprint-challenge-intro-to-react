// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { handler, server } from './mocks'

function Character(props) {
const { characterId, close } = props
  const [details, setDetails] = useState(null)
  useEffect(() => {

  axios
  .get('https://swapi.dev/api/people/1/')
  .then(response => {
    setDetails(response.data)
  })
  .catch(err => console.log(err))


    },[characterId])

    return(
        <div className='container'>
        <h2>Details of friend with id {characterId}):</h2>
    {
    details &&
    <>
        <p>Name{characterId.name}</p> 
        <p>gender{characterId.gender}</p>
         <p>Height {characterId.height}</p>
         <p>mass{characterId.mass}</p>
         <p>Hair Color{characterId.hair_color}</p>
         <p>Eye Color{characterId.eye_color}</p>
    
           
    </>
    }
        <button onClick ={close}>Close</button>

        </div>

 )

}
export default Character;

//<ul>
//{details.name.map((name) => <li key={name}>{name}</li>)}
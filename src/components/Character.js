// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Characters(props) {
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
         <ul>
            {details.name.map((name) => <li key={name}>{name}</li>)}
          </ul> 
    </>
    }
        <button onClick ={close}>Close</button>



        </div>

 )

}
export default Characters;
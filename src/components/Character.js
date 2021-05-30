// Write your Character component here
import React from 'react'

import styled from 'styled-components'

function Character(props) {
const { characterId, close } = props
  
  

    return(
        <div className='container'>
        <h2>Details of friend with id {characterId}):</h2>
        
        <p>Name{characterId.name}</p> 
        <p>gender{characterId.gender}</p>
         <p>Height {characterId.height}</p>
         <p>mass{characterId.mass}</p>
         <p>Hair Color{characterId.hair_color}</p>
         <p>Eye Color{characterId.eye_color}</p>
               
        <button onClick ={close}>Close</button>

        </div>

 )

}
export default Character;

//<ul>
//{details.name.map((name) => <li key={name}>{name}</li>)}
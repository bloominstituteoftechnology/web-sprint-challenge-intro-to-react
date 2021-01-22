// Write your Character component here

import React, { useState, useEffect } from "react"
import Axios from  "axios"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
`

const CharacterCardContainer = styled.div`
  color: whitesmoke;
  justify-self:center;
  width: 100%;
  background-color:grey;
  padding:2%;
  .panel{
      height: 0px;
      opacity: 0;
  }
  &.active .panel{
    height: 250px;
    opacity: 1;
  }
`;

const Character = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    Axios.get("https://swapi.dev/api/people/")
.then(res => {
  console.log(res.data.results)
  setCharacters(res.data.results)
})
.catch(err =>{console.log(err)})
}, [])

const toggleActive = (event, idx) => {
    console.log(event)
    event.preventDefault()
    const characterCard = document.getElementById(`card-${idx}`)
    characterCard.classList.toggle('active')
}

    return (
      <Container>
        {characters.map((character, idx) => {
          console.log(character)
        return (  
            <CharacterCardContainer id={`card-${idx}`} key={idx} >
            <button class="accordion" onClick={event => toggleActive(event, idx)}>Name: {character.name}</button>
            <div class="panel" onClick={e => {e.stopPropagation()}}>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Birth Year{character.birth_year}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color:{character.skin_color}</p>
            </div>
            </CharacterCardContainer>
            )
          })}
      </Container>
        
    )
    }

export default Character

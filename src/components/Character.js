// Write your Character component here
import React from 'react'
import styled from 'styled-components'

//styles
const StyledCharacter = styled.div`
  margin: 0 auto;
  width: 90%;
  background-color: rgba(255, 255, 255, .3)
`

export default function Character(props) {
  const {character} = props;
  return (
    <StyledCharacter>
      {/* <img src={image} alt={character.name} /> */}
      <h2>{character.name}</h2>
      <p></p>
    </StyledCharacter>
  )
}

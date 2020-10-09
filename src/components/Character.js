// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.button`
  color: black;
  background-color: white;
  font-weight: bold;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CharDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
`

export default function CharacterName(props) {
    const { char } = props

    return (
        <CharDiv>
            <StyledCharacter>
              {char.name}
            </StyledCharacter>
        </CharDiv>
    )
}

//const Details = (props) => {
//}
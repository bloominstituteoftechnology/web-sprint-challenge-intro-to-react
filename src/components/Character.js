import React from 'react';
import styled from 'styled-components';




// Write your Character component here

const StyledCharacter = styled.div`
    width: 20% auto;
    background-color: #f4f4f4;
    border: 5px inset #6CCAC7;
`

const characterInfo = {
    name: '',
    height: '',
    gender: ''
  }

  
    const Character = props => {
        return (
            <StyledCharacter>
                <h2>{character.name}</h2>
                <div>{character.birth_year}</div>
                <div>{character.height}</div>
            </StyledCharacter>
        )
    }

export default Character
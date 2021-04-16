import React, { useState } from 'react';
import styled from 'styled-components';




// Write your Character component here

const StyledCharacter = styled.div`
    width: 40vh;
    background-color: black;
    border: 5px inset #6CCAC7;
    justify-content: center;
    align-items: center;
    text-align: left;
    font-size: 3vh;
    padding: 4vh;
`

// const [character, setCharacter] = useState(character)

  
    const Character = props => {
        return (
            <StyledCharacter>
                <h2>Name:{props.name}</h2>
                <div>Height:{props.height}</div>
                <div>Gender:{props.gender}</div>
            </StyledCharacter>
        )
    }

export default Character
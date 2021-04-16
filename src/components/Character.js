import React from 'react';
import styled from 'styled-components';




// Write your Character component here

const StyledCharacter = styled.div`
    width: 20% auto;
    background-color: #f4f4f4;
    border: 5px inset #6CCAC7;
`



  
    const Character = props => {
        return (
            <StyledCharacter>
                <h2>Name:{props.characterData.name}</h2>
                <div>Height:{props.characterData.height}</div>
                <div>Gender:{props.characterData.gender}</div>
            </StyledCharacter>
        )
    }

export default Character
import React from 'react';
import styled from 'styled-components';




// Write your Character component here

const StyledCharacter = styled.div`
    border: 5px inset #6CCAC7;
`
const Character = props => {
    const {character} = props
    return (
        <StyledCharacter>
            {character}
        </StyledCharacter>
    )
}

export default Character
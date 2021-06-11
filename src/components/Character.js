// Write your Character component here
import React from 'react';
import Details from './Details';
import styled from 'styled-components';

const StyledCharacter = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border: 2px solid white;

  &::after {
      content: ;
  }
`

const StyledButton = styled.button`
    background-color: 'black';
    margin-left: ;
    &:hover {
        transform: scale(1.1);
    }
`


const Character = (props) => {
    const {info, action } = props
    
        return (
                <StyledCharacter info={info}>
                    {info}
                    <StyledButton onClick={() => action(info.id)}>
                        See Details
                    </StyledButton>
                </StyledCharacter>
        )
    }
    
    export default Character
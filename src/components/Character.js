// Write your Character component here
import React from 'react';
import Details from './Details';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
  50% {
    transform: scale(0.8)
  }
  100% {
    opacity: 1;
    transform: scale(1)
  }
`

const StyledCharacter = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border: 2px solid white;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: red;
  }

  transform: scale(2);
  opacity: 0;
  animation: ${kf} 0.3s ease-in-out forwards;
`

const StyledButton = styled.button`
    background-color: 'black';
    border-radius: 8px;
    padding: 5px;
    width: 15%;
    color: 'grey';
    &:hover {
        transform: scale(1.1);
    }
`


const Character = (props) => {
    const {info, year } = props
    
        return (
                <StyledCharacter info={info}>
                    {info}
                    <StyledButton year={year}>
                        {year}
                    </StyledButton>
                </StyledCharacter>
        )
    }
    
    export default Character
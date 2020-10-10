// Write your Character component here

import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  100% {
    opacity: 1;
  }
`
const StyledCharacter = styled.div`
  color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.secondaryColor};
  opacity: 0;
  animation: ${kf} 2.5s ease-in-out forwards;
  text-align: center;

  @media (max-width: 550px) {
    width: 100%;
  }

  h2 {
     &:hover {
      color: ${pr => pr.theme.secondaryColor};
      transition: all 0.5s ease-in-out;
      }
      transition: all 0.5s ease-in-out;
    }
`
export default function Characters (props) {
  return(
    <StyledCharacter>
      <h2> {props.name} </h2>
      <h4> {props.gender} </h4>
    </StyledCharacter>
    )}

// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 5;
  }
`
const StyledButton = styled.button`
border: 2px solid black;
width: 15%;
margin-left: 1%;
padding: 20px;
font-weight: bold;
background: transparent;
&:hover{
     animation: 2s ${fadeIn} ease-out;
     transform: scale(1.1);
`

export default function Character({ info, action }) {
    return (
        <>
            <StyledButton onClick={() => action(info)}>{info.name}<br></br><div>Reveal Character</div></StyledButton>

        </>
    )
}

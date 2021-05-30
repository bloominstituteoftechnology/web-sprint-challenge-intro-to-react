import React from 'react';
import Character from './components/Character';
import styled, { keyframes } from 'styled-components'

const StyledButton = styled.button `
  text-align: left;
  border: 2px solid black;
width: 15%;
margin-left: 1%;
padding: 20px;
font-weight: bold;

`
export default function CharacterButton({ info, details }) {
   
   
    return (
     
        <StyledButton onClick={() => details(info)}>{info.name} Show Details


   </StyledButton>
    )

    }
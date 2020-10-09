// Write your Character component here
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import theme from '../theme'

const StyledCharacter = styled.div`
    color: ${pr=> pr.theme.primaryColor};
    font-weight: bold;


    &:hover{
        transform: scale(1.15);
        transition: all 0.4s ease-in-out;

    }

`



export default function Character(props){
    const {characterList} = props

  const characterCard = characterList.map(char => {
    return <StyledCharacter key={char.id}>
        <ul>
        <h3>NAME: {char.name}</h3>
        <h4>STATUS: {char.status}</h4>
        <h4>SPECIES: {char.species}</h4>
        <h4>GENDER: {char.gender}</h4>
        <img src={char.image}></img>
    </ul>
    </StyledCharacter>
    })

    return characterCard
}

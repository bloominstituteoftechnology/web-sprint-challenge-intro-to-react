import React from 'react'
import styled from 'styled-components'

const CharacterDiv = styled.div`
text-align:center;
border: 3px double #FFE81F;
max-width: 400px;
margin-right:auto;
margin-left:auto;
margin-bottom: 10px;
color: #FFE81F;
padding: 10px;
`

function Character({name,height,birthYear,hairColor,skinColor}) {
    return (
        <CharacterDiv>
            <h2>{name}</h2>
            <p>Height : {height}</p>
            <p>Year of Birth : {birthYear}</p>
            <p>Hair Color : {hairColor}</p>
            <p>Skin Color : {skinColor}</p>
        </CharacterDiv>
    )
}

export default Character

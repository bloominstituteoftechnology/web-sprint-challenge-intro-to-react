// Write your Character component here
import React from 'react'; 
import style from 'styled-components'

import CharacterCard from './CharacterCard'

const StyledDetails = style.div`
    background-color: white;
    width: 35%;
    margin: 0 auto;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    border-radius: 5%;
    box-shadow: 4px 4px gray;

    h3 {
        font-family: 'Rowdies', cursive;
        font-size: 30px;
        text-shadow: 3px 2px gray;
    }
`

function Character(props) {

    return (
    <StyledDetails>
        <h3>{props.name} </h3>
        <CharacterCard
        name={props.name} 
        gender={props.gender} 
        birthday={props.birthday}
        hairColor={props.hairColor}
        eyeColor={props.eyeColor}
        mass={props.mass}
        rides={props.rides}/>

    </StyledDetails>
    ); 
}

export default Character;
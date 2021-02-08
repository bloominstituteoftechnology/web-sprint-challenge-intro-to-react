// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCards = styled.div`
    color: black;
    border: black 3px solid;
    margin: 2%;
    width: auto;
`
const StyledDead = styled.p`
    color: green;
    font-weight: bold;
`

const Character = (props) => {
    console.log(props);

    return(
        <StyledCards>
            <img src={props.character.image} alt={props.character.name} />
            <h2>{props.character.name}</h2>
            <p>{props.character.species}</p>
            <p>{props.character.gender}</p>
            {props.character.status === "Dead" ?
                <StyledDead>{props.character.status}</StyledDead>
                :
                <p>{props.character.status}</p>
            }
        </StyledCards>
    )
}

export default Character
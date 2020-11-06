// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCards = styled.div`
    overflow: auto;
    border: black 3px solid;
    border-radius: 10px;
    position: relative;
    margin: 2%;
    width: auto;
    ${({ status }) => status === 'Dead' && `
        outline: none;
        border-color: red;
        box-shadow: 0 0 15px red;
        color: red;
        .status{
            text-shadow: 0 0 3px red;
        }
    `};
`

const Character = (props) => {
    console.log(props);

    return(
        <StyledCards status={props.character.status}>
            <img src={props.character.image} alt={props.character.name} />
            <h2>{props.character.name}</h2>
            <p>{props.character.species}</p>
            <p>{props.character.gender}</p>
            <p class='status'>{props.character.status}</p>
            
        </StyledCards>
    )
}

export default Character
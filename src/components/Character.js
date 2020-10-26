// Write your Character component here

import React from "react";
import Styled, { } from 'styled-components'

const StyledCards = Styled.div`
    justify-content: center;
    margin-bottom: 5%;
    color: black;
    border: black 3px solid;
    padding: 8px;
    box-shadow: 5px 10px;

    &:hover {
        background-color: grey;
    }
`


const Character = (props) => {
    const { name, height } = props.starWars

    return (
        <div>
            <StyledCards>
                <h1>{name}</h1>
                <h2>{height}</h2>
            </StyledCards>
        </div>
    );
};

export default Character;
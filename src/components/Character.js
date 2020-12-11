// Write your Character component here
import React from "react";
import styled from "styled-components";

export default function CharacterData(props) {
    const {rmData} = props;
    
    return (
        <styledCharacter>
            <div>
                <img src = {rmData.image} alt = "character portrait"/>
            </div>
            <h2>{rmData.name}</h2>
            <div>
                <h3>Species: {rmData.species}</h3>
                <h3>Gender: {rmData.gender}</h3>
                <h3>Status:{rmData.status}</h3>
                <h3>Origin: {rmData.origin.name}</h3>
            </div>
        </styledCharacter>
    )
}

const styledCharacter = styled.div`
    display: flex'
`
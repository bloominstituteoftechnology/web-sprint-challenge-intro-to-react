// Write your Character component here
import React from "react";
import styled from "styled-components";

export default function CharacterData(props) {
        return (
            <styledCharacter>
            <div>
            <h2>{props.results.name}</h2>
                <img src = {props.results.image} alt = "character portrait"/>
            </div>
            <div>
                <h3>Species: {props.results.species}</h3>
                <h3>Gender: {props.results.gender}</h3>
                <h3>Status:{props.results.status}</h3>
                <h3>Origin: {props.results.origin.name}</h3>
            </div>
        </styledCharacter>
    )
}


const styledCharacter = styled.div`
    display: flex'
`
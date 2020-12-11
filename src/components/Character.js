// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character({details}){
    
    return(
        <div>
            <StyleCharacter>
                <StyleP>{details.name}</StyleP>
                <StyleP>{details.birth_year}</StyleP>
            </StyleCharacter>
        </div>
        
    )
}

//styling component
const StyleCharacter = styled.div`
    color: white;
    background-Color: black;
    width: 70vw;
    border: 2px solid green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1% auto;
`;

const StyleP = styled.p`
    margin: 1%;
`;
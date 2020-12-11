// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character({details}){
    
    return(
        <div>
            <StyleCharacter>
                <p>{details.name}</p>
                <p>{details.birth_year}</p>
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
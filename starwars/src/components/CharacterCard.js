import React from 'react'
import styled from 'styled-components'


const CardContainer = styled.div`  
    justify-content: center;
    border: 2px solid black;
    width: 25%;
    margin: 30px;
    background-color: black;
`;

const Name = styled.h1`
    background-color: silver;
`;

const Species = styled.p`
    background-color: silver;
`;

const Gender = styled.p`
    background-color: silver;
`;

const Alive = styled.p`
    background-color: silver;
`;


function CharacterCard(prop) {
    return(
        
        <CardContainer>
            <Name>{prop.name} </Name>
            <img src = {prop.image}/>
            <Species>{prop.species}</Species>
            <Gender>{prop.gender}</Gender>
            <Alive>{prop.alive}</Alive>

        </CardContainer>
        
    )
    
};

export default CharacterCard;
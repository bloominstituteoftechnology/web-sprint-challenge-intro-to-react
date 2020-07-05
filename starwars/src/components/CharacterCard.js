import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    justify-content: center;
`;


const CardContainer = styled.div`  

    text-align: center;
    border: 2px solid black;
    width: 25%;
    margin: 30px;
    background-color: black;
`;

const CharacterImg = styled.img`
    width: 100%;
    height: auto;

`;

const Name = styled.h1`
    font-size: 100%;
    background-color: silver;
    width: 100%;
    height: auto;
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
        <Flex>
            <CardContainer>
                <Name>{prop.name} </Name>
                <CharacterImg src = {prop.image}/>
                <Species>{prop.species}</Species>
                <Gender>{prop.gender}</Gender>
                <Alive>{prop.alive}</Alive>

            </CardContainer>
        </Flex>
    )
    
};

export default CharacterCard;
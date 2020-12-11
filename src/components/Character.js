// Write your Character component here
import React from 'react';
import styled from 'styled-components';


export default function createCharacter ({ eachCharacter }){

    const EachDiv = styled.div`
        border: 2px solid gold;
        margin: 0% 10% 2% 10%;
        background-color: red;
        border: 40px solid darkgreen;

    `
    const Paragraf = styled.p`
        font-size: 4rem;
        color: gold;
    `;

    const Header = styled.h1`
            color: gold;
            letter-spacing: 0.05em;
            text-shadow: 1px 1px 6px #111;
            font-size: 4rem;
    
            &:hover{
                 color: darkgreen;
            }`
    
    const Image = styled.img`
            padding: 1%;
    `




return (
    <EachDiv>
        <Image src= {eachCharacter.image} alt ='Card for every character'/>
        <Header className = 'Name'>{eachCharacter.name}</Header>
        <Paragraf className = 'Status'>{eachCharacter.status}</Paragraf>
        <Paragraf className = 'Species'>{eachCharacter.species}</Paragraf>
    </EachDiv>


)
}

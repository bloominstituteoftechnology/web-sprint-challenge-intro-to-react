// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    background-color: #12B0C9;
    color: #fff;
    width: 45%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:0.5rem;
    
`;

const Title = styled.h3`
font-size:2rem;
color:#D2E054;


`

const CardImg = styled.img`
max-width:75%;
height:auto;
border-radius: 50%;
margin: 0 auto 0.5rem;

`
const CardDesc = styled.li`
list-style: none;
padding: 0.25rem;
&:hover {
    color: #D2E054;
    cursor: pointer;
}
`

const Character = ( props ) => {
    console.log(props)
    
        return (
            <CardStyle className = 'CharacterCard'>
            <Title className = 'title' >{props.character.name}</Title>
            <CardImg alt = 'rick and morty character' src = { props.character.image }></CardImg>
            <CardDesc className = 'gender' >Gender: { props.character.gender }</CardDesc>
            <CardDesc className = 'species'>Species: { props.character.species }</CardDesc>
            <CardDesc className = 'location'>Location: { props.character.location.name }</CardDesc>
            <CardDesc className = 'origin'>Origin: { props.character.origin.name }</CardDesc>
            <CardDesc className = 'status'>Status: { props.character.status }</CardDesc>
            </CardStyle>
        )


  }
export default Character






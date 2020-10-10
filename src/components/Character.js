// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Cards = styled.div `
 
 display: flex;
 flex-wrap: wrap;
 width: 30%;
 justify-content: space-evenly;
 margin-top: 30px;
 align-items: center;
 padding: 20px;
 background-image: linear-gradient(45deg, gold, whitesmoke);
 color: black;
 margin: 5%;
 border-radius: 6px;

 &:hover{
     border: 2px solid slategray;
 }
 
`;

const Button = styled.button `

color: whitesmoke;
background-color: black;
border-radius: 6px;
padding: 5%;
text-align: 'center';
width: 100%;

&:hover {
    background-color: rgb(35,35,35);
}
`;

const Character = ({character}) => {
    console.log('poke props', character);
    return ( 
        <Cards>
            <h2 style={{textAlign:'center', fontSize: 30, width: '100%'}}>Name: {character.name} </h2>
            <br/>
            <Button onClick={()=> {window.open(character.url)}}> Learn More!!!</Button>
        </Cards>
    );
};

export default Character;
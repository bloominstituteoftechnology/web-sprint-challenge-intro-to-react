import React from 'react';
import styled from "styled-components";
// Write your Character component here
const character = ( {name,mass,gender,birthyear}) =>{
    const StyleDiv= styled.div`
    color: green;
    font-weight: bold;
    font-size: 12px;
    
    `;
    
    const FirstName= styled.div`
    text-align:center;
    color: purple;
    font-weight: bold;
    border: black 5px dashed;
    font-size: 20px;
    `;
    
    
    return (
        <StyleDiv>
        <div className = 'Character-Container'>     
        <FirstName>
            <h1>{character}</h1>
            <p>{name}</p>
            </FirstName>
            <p>{mass}</p>
           <p>{birthyear}</p> 
           <p>{gender}</p> 
            </div>
            </StyleDiv>
           
           
    
            
    
    );
    };
    
    
    
    
    
    export default character;
    
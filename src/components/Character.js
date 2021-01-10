// Write your Character component here
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'



const StyledChar = styled.div`
    
    border: 5px solid black;
    background-color: white;
    width: 600px;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 10px;
    padding: 10px;
    padding-top: 0px;
    padding-bottom: 50px;
    
    h2 {
        font-size: 55px;
        font-family: sans-serif;
        background-color: black;
        width: 105%;
        margin-top: 0;
        color: white;

        
    }

    img {
        width: 103%;
    }

    p {
        font-size: 25px;
        font-family: sans-serif:
        font-weight: bold;
        margin-top: 0;

    }

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;  

`

const Character = (props) => {

    
    return (
        <StyledChar className='container'>
            <h2>{props.character.name}</h2>
            {props.character.species === 'Human' ?
            <p>Species: {props.character.species} 😉</p> :
            <p>Species: {props.character.species} 👽</p>}
            <p>Gender: {props.character.gender}</p>
            <p>Origin: {props.character.origin.name}</p>
            <p>Location: {props.character.location.name}</p>
            <img src={props.character.image}/>


        </StyledChar>

    )
}

export default Character

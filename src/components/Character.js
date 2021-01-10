// Write your Character component here
import React from 'react'
import styled from 'styled-components'



const StyledChar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center; 
    border: 5px solid black;
    background-color: #daeaff;
    width: 1000px;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 10px;
    padding: 10px;
    padding-top: 0px;
    padding-bottom: 50px;
    
    h2 {
        font-size: 55px;
        font-family: Creepster;
        font-weight: bold;
        background-color: black;
        width: 103%;
        margin-top: 0px;
        color: #08889a;
        -webkit-text-stroke: 0.1px white;

        
    }

    img {
        width: 102%;
        height: 500px;%;
        &:hover {
            webkit-transform: scale(1.5);
            transform: scale(1.5);
            webkit-transition: 1.5s ease-in-out;
            transition: 0.5s ease-in-out;
        }
    }

    p {
        font-size: 25px;
        font-family: sans-serif:
        font-weight: bold;
        margin-top: 0px;

    }

     

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
            <p>Current Location: {props.character.location.name}</p>
            <img src={props.character.image}/>


        </StyledChar>

    )
}

export default Character

// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacterDiv = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-top: 2%;
    padding-top: 1%;
    padding-bottom: 5%;
    width: 50%;
    background-color: rgba(143,67,33,0.6);
    border: double;
    font-family: 'Space Grotesk', sans-serif;
    color: rgb(36, 27, 3);

    .data h3, .constants h3{
        width: 100%;
        margin: 1 auto;
        padding: 2%;
        
    }


`;

const Character = (props) => {
    function film (title) {
        return (
            <li>{title}</li>
        )
    }


    const { currentCharacter }= props;
    return(
        <StyledCharacterDiv>
            <div className="constants">
                <h1>Name:</h1> 
                <h3>Birth year: </h3> 
                <h3>Gender: </h3> 
                <h3>Eye Color: </h3> 
                <h3>Height: </h3> 
                <h3>Mass: </h3> 
                <h3>Hair Color: </h3> 
            </div>
            <div className="data">
            <h1>{currentCharacter.name}</h1>
            <h3>{currentCharacter.birth_year}</h3>
            <h3>{currentCharacter.gender}</h3>
            <h3>{currentCharacter.eye_color}</h3>
            <h3>{currentCharacter.height} cm</h3>
            <h3>{currentCharacter.mass}</h3>
            <h3>{currentCharacter.hair_color}</h3>
            </div>
        </StyledCharacterDiv>

    )
}


export default Character



// Write your Character component here
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'



const StyledChar = styled.div`
    
    border: 5px solid black;
    background-color: white;
    width: 600px;
    margin: 0 auto;
    padding: 10px;
    
    h2 {
        font-size: 55px;
        font-family: sans-serif;
    }

    img {
        width: 100%;
    }
        



`

const Character = (props) => {

    
    return (
        <StyledChar className='container'>
            <h2>{props.character.name}</h2>
            <p>Species: {props.character.species}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Origin: {props.character.name}</p>
            <img src={props.character.image}/>


        </StyledChar>

    )
}

export default Character

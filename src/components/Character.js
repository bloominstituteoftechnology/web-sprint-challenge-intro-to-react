// Write your Character component here
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'



const StyledChar = styled.div`

    margin: 10px;
    padding: 5px;
    border: 2px solid black;
    width: 500px;

    img {
    width: 300px;
    height: 300px;
    }

    display: flex;
    justify-content: center;



`

const Character = (props) => {

    return (
        <StyledChar className='container'>
            <h2>{props.character.name}</h2>
            <p>Species: {props.character.species}</p>
            <p>Origin: {props.character.name}</p>
            <img src={props.character.image}/>


        </StyledChar>

    )
}

export default Character

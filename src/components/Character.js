// Write your Character component here
import React, {useState, useEffect} from 'react'
import '../App.css';
import styled from 'styled-components'
const StyledCharacter = styled.div`
*{
    display:flex;
}
div{
    background:skyblue;
    margin:1%;
    border-radius:15%;
    color:white;
    width:60%;
    margin-left:20%;

}
h2{
    color:black;
    &:hover{
        transition: all .5s ease-in-out;
        color:${pr=>{
            return pr.evil ? 'red' : 'green'
        }}
    }
    transition: all 1s ease-in-out;
}
p{
    margin-left:5%;
    align-content:space-around;
    margin-top: 3%;
}
`

export const Character = (props) =>{

    return(
        <StyledCharacter evil={props.data.name==='Darth Vader'}>
            <div>
            <h2>{props.data.name}</h2>
            <p>Hair Color: {props.data.hair_color}</p>
            <p>Skin Color: {props.data.skin_color}</p>
            <p>Weight: {props.data.mass}</p>
           </div>
        </StyledCharacter>

    )
}

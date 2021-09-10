// Write your Character component here
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const StyledCharacter = styled.div `
    .character.open .content {
        display:block;
    }

    .bar .title:after {
        content: '+';
        display:inline;
    }

    .character.open .bar .title:after{
        content: '-';
    }

    .bar {
        background: gray;
        cursor: pointer;
    }

    a:active{
        display:block;
    }

    // .content {
    //     display:none;
    // }

    // .content:hover{
    //     display:block;
    }
    
`





export default function Character(props) {
   
            console.log(props)
        useEffect(() => { console.log(props); })
        return (
        <StyledCharacter>  
            <div className='character'>
                <div className='bar'>
                <h3 className='title'>{props.info.name}<span className='icon'></span></h3>
                </div>
                <div className='content'>
                    <p>Gender: {props.info.gender}</p>
                    <p>Height: {props.info.height}</p>
                    <p>Mass: {props.info.mass}</p>
                    <p>BirthYear: {props.info.birth_year}</p>
                    <p>Eye Color: {props.info.eye_color}</p>
                    <p>Hair Color: {props.info.hair_color}</p>
                    <p>Skin Color: {props.info.skin_color}</p>
                </div>
            </div>
        </StyledCharacter>  
    )        
}





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

    .content {
        display:none;
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
                    <p>{props.info.gender}</p>
                    <p>{props.info.height}</p>
                    <p>{props.info.mass}</p>
                    <p>{props.info.birth_year}</p>
                    <p>{props.info.eye_color}</p>
                    <p>{props.info.hair_color}</p>
                    <p>{props.info.skin_color}</p>
                </div>
            </div>
        </StyledCharacter>  
    )        
}





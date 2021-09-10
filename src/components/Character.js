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
    const [ char, setChar ] = useState('')
            console.log('something')
        useEffect(() => { console.log(props); })
        return (
        <StyledCharacter>  
            <div className='character'>
                <div className='bar'>
                <h3 className='title'>{char}<span className='icon'></span></h3>
                </div>
                <div className='content'>
                    <p>gender</p>
                    <p>height</p>
                    <p>mass</p>
                    <p>birth_year</p>
                    <p>eye_color</p>
                    <p>hair_color</p>
                    <p>skin_color</p>
                </div>
            </div>
    </StyledCharacter>  
    )        
}





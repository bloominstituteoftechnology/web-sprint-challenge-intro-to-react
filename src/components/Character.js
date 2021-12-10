// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StarStyle = styled.div`
display:flex;
justify-content:center;
margin:10% 15% 0;
background-color:coral;
border: solid black 5px;
border-radius:10%;
padding:5%;

`


    
const Character = props => {
    const {info} =props
    return (
        <StarStyle>
            
            <p><b>{info.name}</b> was born in {info.birth_year}. 
            They are {info.height}km tall.</p>
        </StarStyle>
    )
}


export default Character;
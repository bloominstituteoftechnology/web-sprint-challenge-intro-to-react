// Write your Character component here
import React from 'react';
import styled from 'styled-components';
const WrapperDiv = styled.div `
border: 1px solid red;
background-color: grey;
border-radius: 5px;
color: white;
width: 50%;
margin: 1%;
`;
function Character(props){
    const {name, birthyear } = props;
    console.log(name)
    
    return(
        <WrapperDiv>
            <h2>Name: {name}</h2>
            <h2>Birthyear: {birthyear}</h2>
        </WrapperDiv>
    )
}   

export default Character;
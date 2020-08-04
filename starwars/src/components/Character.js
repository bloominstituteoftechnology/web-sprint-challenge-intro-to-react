// Write your Character component here

import React from 'react'
import styled from 'styled-components'
import axios from "axios"


const CardInfo = styled.div`
background: lightgrey;
margin: 15px;
font-size: 10px;
width: 300px;
`;

const Card = styled.h2`
background: lightgrey;
margin: 15px;
color: black;
font-size: 10px;
`;

const Character = props => {
    
    return (
        <CardInfo>
                <Card>
                    <h2>Name: {props.name}</h2>
                    <h2>Height: {props.height}</h2>
                    <h2>Mass: {props.mass}</h2>
                    <h2>Gender: {props.gender}</h2>
                </Card> 
        </CardInfo>
    );
};


export default Character;


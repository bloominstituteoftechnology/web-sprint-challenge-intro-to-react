// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyleNames = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100vh;
    align-items: flex-start;
    padding: 4%;
    margin: auto;
    border: 2px solid grey;

    .birth-year{
        font-size: 12px;
        background-color: grey;
        padding:0.5%;
    }
`

export default function Character(props) {
    const { info, /* action, */ birth } = props;

    //console.log(name);

    return(
        <StyleNames className='characterName' birthyr={birth} > 
            {info.name}
            <span className='birth-year' /* will add action later on click */> {info.birth_year} </span>
        </StyleNames>
        );    
};
// Write your Character component here
import React from 'react';
import styled, {keyframes} from 'styled-components';

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`
const StyleNames = styled.div`
    
    :hover{
        background-color: chocolate;
        opacity: 2;
        transform: scale(1.5); 
        animation: ${kf} 0.1s ease-in forwards;
    }

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: stretch;
    align-items: flex-start;
    padding: 2.5%;
    margin: auto;
    border: 2px solid grey;

    .birth-year{
        font-size: 70%;
        color: #fff;
        background-color: grey;
        padding: 1%;
        border-radius: 20% 40%;

        
    }
    .name{
        font-size: 20pt;
    }
`

export default function Character(props) {
    const { info, /* action, */name, birth } = props;

    //console.log(name);

    return(
        <StyleNames className='characterName' birth_yr={birth} > 
            <span className='name' name={name}> {info.name} </span>
            <span className='birth-year' /* will add action later on click */> {info.birth_year} </span>
        </StyleNames>
        );    
};
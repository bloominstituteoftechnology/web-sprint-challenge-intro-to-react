// Write your Character component here
import React from 'react';
import styled, {keyframes} from 'styled-components';



const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
const StyleNames = styled.div`

    :hover{
        background-color: chocolate;
        opacity: 0.4;
        transform: scale(1.1); 
        animation: ${kf} 0.1s ease-in-out forwards;
    }

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: stretch;
    align-items: flex-start;
    padding: 2.5%;
    margin: 1% 0%;
    border: 2px solid grey;

    .birth-year{
        font-size: 70%;
        color: #fff;
        background-color: grey;
        padding: 1%;
        border-radius: 20% 40%;
        
    }
    .name{
        font-size: 30pt;
        font-family: mono;
    }
   
`

export default function Character({info, action}) {
   

    return(
        
        <StyleNames className='characterName' /* ()=>action(info.id) */> 
            <span className='name'> {info.name} </span>
            <button  onClick={() => action(info.id)} className='birth-year'> click me </button>
        </StyleNames>
       
        );    
};
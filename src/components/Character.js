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
        font-size: 20pt;
    }
   
`

export default function Character(props) {
    const { info, action, birth } = props;

    //console.log(name);

    function clickHandler(){
        return (action.info);
    }
    return(
        
        <StyleNames className='characterName' onClick={clickHandler}/* ()=>action(info.id) */> 
            <span className='name'> {info.name} </span>
            <span className='birth-year' birth_yr={birth} > {info.birth_year} </span>
            </StyleNames>
       
        );    
};
// Write your Character component here
import React, {useState,useEffect} from 'react';
import styled from 'styled-components'

import axios from 'axios';
import { render } from '@testing-library/react';

const StyledName = styled.p`
font-family: 'Press Start 2P', cursive;
background-color:black;
color:white;
border-radius: 25px;
padding 5%;

&:hover {
    color:#FFE81F;
    background-color: #000000;
    transition: all 1s ease-in-out;
  }
`
const StyledData = styled.a`
font-family: 'Cabin', sans-serif;
color:white;
//  border:1px solid grey; 


`
const DataDiv = styled.div`
background-color:#000000;
opacity:60%;
padding:5%;
text-align:left;
`
const ChildDiv = styled.div`
width: 25%;
margin: 0 auto;
`
const CharacterContainer = styled.div`
width: 25%;
margin: 0 auto;
`
export default function Characters(props){
    const {src} = props;
    const [display,toggleDisplay] = useState(false);
    const [characters ,setCharacters] = useState([]);
    useEffect(()=>{
        axios.get(src).then((res)=>{
            setCharacters(res.data);
            
        })
    },[])
 
    const Setup = (props)=>(
        <CharacterContainer>
            <StyledName  onClick = {()=>toggleDisplay(!display)}>{props.info.name}</StyledName>
            {display && 
            <DataDiv >
                <ChildDiv>
                    <StyledData>Height: {props.info.height}<br/></StyledData>
                    <StyledData>Hair Color: {props.info['hair_color']}<br/></StyledData>
                    <StyledData>Skin Color: {props.info['skin_color']}<br/></StyledData>
                </ChildDiv>
            </DataDiv>
            }
        </CharacterContainer>
    );
 
 return (
    <div>
        { 
        characters.map((item, i)=>{
            return <Setup key = {i} info = {item}/>
        })
        }
    </div>
 );
}

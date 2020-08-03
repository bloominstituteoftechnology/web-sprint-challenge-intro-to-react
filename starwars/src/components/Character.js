import React, {useState,useEffect} from 'react';
import Characters from '../Characters.js';
import axios from 'axios';
import styled from 'styled-components';
import '../App.css';
//class change function 
function classChange(){
    if(this.target.className === 'hide'){
        this.target.className = '';
    }
    else{
        this.target.className = 'hide';
    }
}
//style 
const Slide = styled.div`
width:35%;
margin:10px 30px;
color:black;
`;
const MainSlide = styled.div`
width:100%;
display:flex;
margin:50px;
color:black;
`;
const Headline = styled.button`
color:white;
background-color:dodgerblue;
border-radius:30px;
`;
// Write your Character component here
const Character = () => {
    const [chars, myChars] = useState([]);
    //mapping some 
    console.log(chars);
useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/4,5,6')
    .then(response => {
        console.log(response.data)
        myChars(response.data);
        
    })
    .catch(err => {
        console.log(err);
      });
  },[]);
  return (
    <div>
    <Headline onclick = {classChange}>Click to View Lesser bounties</Headline>
    <div className = "">
    <MainSlide>
    {chars.map((char) =>
    <Slide>
        <Characters
             name = {char.name}
             location = {char.location.name}
             url = {char.image}
        />
        </Slide>
    )}
  </MainSlide>
  </div>
  </div>
  )
}
export default Character;
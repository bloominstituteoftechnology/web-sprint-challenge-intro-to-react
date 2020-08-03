import React, {useState,useEffect} from 'react';
import './App.css';
import MyCarousel from './Carousel.js';
import Characters from './Characters.js'
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character.js';

//styles
const MyDiv = styled.div`
background:url("https://vignette.wikia.nocookie.net/rickandmorty/images/f/fc/S2e5_Earth.png/revision/latest?cb=20160926065208");
	animation:space-vroom 50s linear infinite;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
color:white;
font-family: 'Muli', sans-serif;
margin:0px;
padding:0px;
border:0px;
@keyframes space-vroom{
	0%{
		background-position:0% 0%;
	}
	25%{
		background-position:20% 10%;
	}
	50%{
		background-position:30% 30%;
  }
  75%{
		background-position:20% 10%;
	}
	100%{
		background-position:0% 0%;
	}
`;
const DivWrapper = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
flex-wrap:wrap;
margin:20px;
`;
const Slide = styled.div`
width:35%;
margin:10px 30px;
color:black;
`;
const MainSlide = styled.div`
width:35%;
display:block;
margin:50px;
color:black;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charOneName, setOneName] = useState('');
  const [charOneLoc, setOneLoc] = useState('');
  const [charOneUrl, setOneUrl] = useState('');
  const [charTwoName, setTwoName] = useState('');
  const [charTwoLoc, setTwoLoc] = useState('');
  const [charTwoUrl, setTwoUrl] = useState('');
  const [charThreeName, setThreeName] = useState('');
  const [charThreeLoc, setThreeLoc] = useState('');
  const [charThreeUrl, setThreeUrl] = useState('');

  //carousel components

//get character one
  useEffect(() => {
      axios
      .get('https://rickandmortyapi.com/api/character/1')
      .then(response => {
          console.log(response.data.image)
          setOneName(response.data.name);
          setOneLoc(response.data.location.name);
          setOneUrl(response.data.image);
      })
      .catch(err => {
          console.log(err);
        });
  },[]);
//get character two
useEffect(() => {
  axios
  .get('https://rickandmortyapi.com/api/character/2')
  .then(response => {
      console.log(response.data)
      setTwoName(response.data.name);
      setTwoLoc(response.data.location.name);
      setTwoUrl(response.data.image);
  })
  .catch(err => {
      console.log(err);
    });
},[]);
//get character three
useEffect(() => {
  axios
  .get('https://rickandmortyapi.com/api/character/3')
  .then(response => {
      console.log(response.data)
      setThreeName(response.data.name);
      setThreeLoc(response.data.location.name);
      setThreeUrl(response.data.image);
  })
  .catch(err => {
      console.log(err);
    });
},[]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <MyDiv>
      <DivWrapper>
      <h1 className="Header">Galactic Empires MOST WANTED</h1>
      </DivWrapper>
    <DivWrapper>
    <MainSlide><MyCarousel /></MainSlide>
    </DivWrapper>
    <DivWrapper> 
        <Slide>
            <Characters
            name = {charOneName}
            location = {charOneLoc}
            url = {charOneUrl}
            />
            </Slide>
            <Slide>
            <Characters
            name = {charTwoName}
            location = {charTwoLoc}
            url = {charTwoUrl}
            />
            </Slide>
            <Slide>
            <Characters
            name = {charThreeName}
            location = {charThreeLoc}
            url = {charThreeUrl}
            />
            </Slide>
            <Slide>
            <Character />
            </Slide>
        </DivWrapper>
    </MyDiv>
  );
}

export default App;

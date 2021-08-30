import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import './App.css';
import Character from './components/Character';

const styleDiv = styled.div`
   display: flex;
   flex-wrap: wrap;
`;

const App = () => {
  
  
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [URL] = useState("https://swapi.dev/api/people")
  const [char, setChar] = useState([])

  const [mURL] = useState("https://swapi.dev/api/films")
  const [movie, setMovie] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=>{
   axios.get(URL)
      .then((res) => {
        console.log('RESULTS', res.data)
        setChar(res.data)
      })
      .catch(errors => {console.log(errors) debugger})
  }, [])

  useEffect(()=>{
    axios.get(mURL)
       .then((res) => {
         console.log('RESULTSMOVIE', res.data.results)
         setMovie(res.data.results)
       })
       .catch(errors => {console.log(errors) debugger})
   }, [])
  
  
  
  
  return (
    <div className="App">
      <styleDiv>
      <p className="Header"><Character  character={char} movie={movie}/></p>
      </styleDiv>
    </div>
  );
}

export default App;
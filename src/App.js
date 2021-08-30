import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import './App.css';
import Character from './components/Character';
import Movie from './components/Movie';

const StyledDiv = styled.div`
   color: gold;
`;

const App = () => {
  
  
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [URL] = useState("https://swapi.dev/api/people")
  const [chars, setChar] = useState([])

  const [mURL] = useState("https://swapi.dev/api/films")
  const [movies, setMovie] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=>{
   axios.get(URL)
      .then((res) => {
        console.log('RESULTS', res.data)
        setChar(res.data)
      })
      .catch(errors => { debugger})
  }, [])

  useEffect(()=>{
    axios.get(mURL)
       .then((res) => {
         console.log('RESULTSMOVIE', res.data.results)
         setMovie(res.data.results)
       })
       .catch(errors => { debugger})
   }, [])
  
  
  
  
  return (
    <StyledDiv className="App">
      
      {chars.map(char => {
        return(
      
      <p><Character character={char} /></p>
     
        );
      })}
       
      {movies.map(mov => {
        return(
      
      <p><Movie movie={mov}/></p>
      
        );
      })}
      
    </StyledDiv>
  );
}

export default App;
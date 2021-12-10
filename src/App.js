import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Character from './components/Character'
import './App.css';

const styleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  const [URL] = useState("https://swapi.dev/api/people")
  const [char, setChar] = useState([])

  const [mURL] = useState("https://swapi.dev/api/films")
  const [movie, setMovie] = useState([])

  useEffect(()=>{
    axios.get(URL)
       .then((res) => {
         console.log('RESULTS', res.data)
         setChar(res.data)
       })
       .catch(errors => {console.log(errors)})
   }, [])
 
   useEffect(()=>{
     axios.get(mURL)
        .then((res) => {
          console.log('RESULTSMOVIE', res.data.results)
          setMovie(res.data.results)
        })
        .catch(errors => {console.log(errors)})
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
  
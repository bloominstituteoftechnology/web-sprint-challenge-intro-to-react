import React , {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios"
import styled from "styled-components"
const App = () => {

const {characterInfo, setcharacterInfo} = useState([]);

useEffect(() => {
  axios.get('https://swapi.dev/api/people/')

  .then((res) => {
    setcharacterInfo(res.data.results);
  })

  .catch((err) => {
    console.log(err);
  })
}, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <AppStyled>{characterInfo && characterInfo.map(character => {

  return <Character/>
        })}</AppStyled>
    </div>
  );
}

const AppStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default App;
import React, { useState, useEffect}from 'react';
import './App.css';
import axios from "axios"
import Charecter from "./components/Charecter";
import styled from "styled-components";

const StyledApp = styled.div`
text-align: center;
background-color: #15161C;
breakpointMobile: "(max-width: 550px)",
breakpoints: {
  mobile: "(max-width: 550px)",
  tablet: "(max-width: 800px)",
`
const App = () => {
  const [Charecter, setCharecter] = useState([])

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        console.log(res.data)
        setCharecter(res.data)
      })
      .catch((error) => {
        console.log(error)
      });
   
  }, []);

  if (!Charecter.data) {

  return (
    <StyledApp className="App">
      <h1> Rick and Morty Charecter</h1>
      CharecterR.map(info => {
          <Charecter key={info.id} info={info} />

      })
     
    </StyledApp>
  );
  }
  return <h2>“My interdimensional portal device… it’s got no charge left, Morty. It’s got no charge left. It’s as good as garbage, Morty.”</h2>
}
export default App;


// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
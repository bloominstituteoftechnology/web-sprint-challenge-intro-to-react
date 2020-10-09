import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character.js";
import styled from "styled-components";

const App = (props) => {
  const [starWarsData, setStarWarsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setStarWarsData(res.data.results);
      })
      .catch((err) => {
        console.log("failed to get");
      });
  }, []);
  console.log(starWarsData);

  // const StarWarsCharacters = starWarsData.map(function(item) {
  // 	return item;
  // });
  // console.log('char', StarWarsCharacters);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
      <Character data={starWarsData} />
    </StyledApp>
  );
};

export default App;

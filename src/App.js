import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./Character";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData, setCharData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
		axios
			.get("https://rickandmortyapi.com/api/character/?page=2")
			.then((res) => {
				setCharData(res.data.results);
			})
			.catch((err) => console.log(err));
	}, []);

	console.log({ charData });

	const StyledDiv = styled.div`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: flex-start;
	`;

  return (
		<div className="App">
			<h1 className="Header">Characters</h1>
			<StyledDiv>
				{charData.map((char) => {
					return <Character key={char.id} character={char} />;
				})}
			</StyledDiv>
		</div>
	);
};

export default App;

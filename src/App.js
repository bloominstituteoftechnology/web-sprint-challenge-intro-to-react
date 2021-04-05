import React, { useState, useEffect } from "react";
import Character from "./components/Character";
import Axios from "axios";
import "./App.css";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	const [characters, setCharacters] = useState([]);
	const name = [];
	useEffect(() => {
		Axios.get("https://swapi.dev/api/people/")
			.then((result) => {
				for (let i = 0; i < result.data.length; i++) {
					name.push(result.data[i].name);
				}
				console.log(name);
				setCharacters(name);
			})
			.catch((error) => {
				console.log(error);
				console.log("error");
			});
	}, []);

	return (
		<div className="App">
			<h1 className="Header">Characters</h1>
			<h2>
				<Character name={characters} />
			</h2>
		</div>
	);
};

export default App;

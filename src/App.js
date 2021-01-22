import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL, API_KEY } from "./constants/index";
import "./App.css";
import Character from "./components/Character";
const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [rickNmorty, setrickNmorty] = useState([]);
	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	useEffect(() => {
		axios
			.get(`${BASE_URL}api/${API_KEY}`)
			.then((response) => {
				console.log(response.data);
				console.log(response.data.results);

				return setrickNmorty(response.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<AppDiv className="">
			<h1 /*className="Header"*/>Awesome Rick and Morty Characters List</h1>
			{rickNmorty.map((rnm) => {
				return <Character characterdata={rnm} />;
			})}
		</AppDiv>
	);
};
const AppDiv = styled.div``;
// function App() {
// 	const [nasaData, setNasaData] = useState({});
// 	useEffect(() => {
// 		axios
// 			.get(`${BASE_URL}?api_key=${API_KEY}`)
// 			.then((res) => {
// 				setNasaData(res.data);
// 			})
// 			.catch((err) => console.log(err));
// 	}, []);
// 	return (
// 		<WynBaby>
// 			<TopLogo />
// 			<Navbar />
// 			<AboveImage date={nasaData.date} title={nasaData.title} />
// 			<Imagefile imageurl={nasaData.url} />
// 			<ImageText imagetext={nasaData.explanation} />
// 		</WynBaby>
// 	);
// }
export default App;

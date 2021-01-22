import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./index.js";
import Character from "./components/Character.js";
import axios from "axios";
export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  const [characterId, setCharacterId] = useState(null);

  const openDetails = (id) => {
    setCharacterId(id);
  };

  const closeDetails = () => {
    setCharacterId(null);
  };

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`${BASE_URL}/character/${characterId}?api_key=${API_KEY}`)
      .then((res) => setCharacterId(res.data))
      .catch((err) => console.log(err));
  }, [characters]);
  return (
    <div className="App">
      <Character />
    </div>
  );
}

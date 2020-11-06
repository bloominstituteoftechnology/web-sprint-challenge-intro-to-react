import React, { useState } from "react";
import PlanetList from "./components/PlanetList.js";
import PlanetForm from "./components/PlanetForm";
import axios from "axios";
import "./App.css";

const App = () => {
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [planetPost, setPlanetPost] = useState([]);

  const getData = () => {
    console.log("btn");
    axios
      .get("https://swapi.dev/api/planets/1/") //Make this all later!!
      .then((res) => {
        console.log("res", res);
        setPlanetPost(res.data);
        console.log("planetPost", planetPost);
      })
      .catch((error) => {
        console.log(`Error:${error}`);
        setError(error);
      });
  };

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Planets</h1>
      <PlanetForm name={"app"} getData={getData} />
      <PlanetList name={"app"} />
    </div>
  );
};

export default App;

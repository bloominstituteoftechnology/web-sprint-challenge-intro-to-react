import React, { useState } from "react";
import PlanetList from "./components/PlanetList.js";
import PlanetForm from "./components/PlanetForm";
import { ThemeProvider } from "styled-components";
import Theme from "./components/theme/theme.js";
import axios from "axios";
import "./App.css";

const App = () => {
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [planetPost, setPlanetPost] = useState([]);

  const getData = () => {
    console.log("btn");
    setLoad(true);

    axios
      .get("https://swapi.dev/api/planets/1/") //Make this all later!!
      .then((res) => {
        console.log("res", res);
        setPlanetPost(res.data); //Why does it need to be double clicked? Why doesn't it work the firstTime round?
        console.log("planetPost", planetPost);
        setLoad(false);
      })
      .catch((error) => {
        console.log(`Error:${error}`);
        setError(error);
      });
  };
  //Add more planets and see if we can add a drop down for each, simialr, to web-guided-project-react-components2

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <h1 className="Header">Star Wars Planets</h1>
        <PlanetForm getData={getData} load={load} />
        <PlanetList planetPost={planetPost} error={error} />
      </div>
    </ThemeProvider>
  );
};

export default App;

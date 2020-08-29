import React from "react";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // const [charList, setCharList] = useState();

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const axios = require("axios");

  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => {
      console.log("This is the response:", res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
};

export default App;

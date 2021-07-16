import React, { useState } from "react";
import "./App.css";
import "./mocks/handlers.js";

const buttonsList = ["1", "2", "3", "4", "5", "6"];
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [button, buttonPressed] = useState(false);
  const buttonOn = (e) => {
    buttonPressed(!button);
  };
  console.log(button);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <button className="Button" onClick={buttonOn}>
        information1
      </button>
      <button className="Button" onClick={buttonOn}>
        information2
      </button>
      <button className="Button" onClick={buttonOn}>
        information3
      </button>
      <button className="Button" onClick={buttonOn}>
        information4
      </button>
      <button className="Button" onClick={buttonOn}>
        information5
      </button>
      <button className="Button" onClick={buttonOn}>
        information6
      </button>
    </div>
  );
};

export default App;

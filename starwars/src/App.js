import React from "react";
import "./App.css";
import Character from "./components/Character";

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
    </div>
  );
};

export default App;

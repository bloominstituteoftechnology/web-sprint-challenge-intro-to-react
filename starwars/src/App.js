import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setInfo(response.data.results);
        console.log("success", response);
        let failedState = response.data.results;
        failedState.map((bio) => {
          console.log(bio);
          return bio;
        });
      })
      .catch((error) => console.log("failure", error));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">
        <Character data={info} />
      </h1>
    </div>
  );
}

export default App;

// console.log(data);
//   data.map((bio) => {
//     console.log(bio);
//     return <div key={bio}>{bio}</div>;

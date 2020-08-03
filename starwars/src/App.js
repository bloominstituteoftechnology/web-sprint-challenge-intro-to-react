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
        console.log("success", response);
        setInfo(response.data);
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

// import React from "react";
// import axios from "axios";

// function App() {
//   const [info, setInfo] = useState({});

//   useEffect(() => {
//     axios
//       .get("https://swapi.dev/api/people/")
//       .then((response) => {
//         console.log("success", response);
//         setInfo(response.data);
//       })
//       .catch((error) => console.log("failure", error));
//   }, []);

//   return <div></div>;
// }

// export default App;

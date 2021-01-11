import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Characters from "./components/Characters.js";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // Making API calls
  const [data, setData] = useState([]);

  // console.log(
  //   "initial data will start blank and then populate after successful API call",
  //   data
  // );

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setData(res.data.results);

        console.log(
          "API request is successful. Check data array",
          res.data.results
        );
      })
      .catch((err) => console.log("The API request failed"));
  }, []);

  return (
    <div className="App">
      <div className="d-flex container flex-column">
        <div className="justify-content-center character2">
          <h1
            className="display-4"
            style={{
              margin: "1rem 1rem",
              textShadow: ".3rem .3rem 1.5rem lime",
            }}
          >
            Star Wars API
          </h1>
          <br></br>
         <div className="line-up">""</div>
          <img
            className="yoda-shadow"
            src="https://hipsterapproved.files.wordpress.com/2013/05/starwars-art-r2d2.jpeg"
            alt="concept yoda"
            style={{ width: "70%" }}
          ></img>
        </div>
        <br></br>
        <Characters characters={data} />
      </div>
    </div>
  );
};

export default App;

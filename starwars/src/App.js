import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([]);

  const [imageIndex, setImageIndex] = useState(0);
  // console.log(data);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        setData(res.data.results);
        // console.log(setData);
      })
      .catch((err) => {
        console.log("Uh oh Somethings is not right!!");
      });
  }, []);

  if (!data.length) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters List</h1>

      <div>
        <Cards
          data={data}
          setImageIndex={setImageIndex}
          imageIndex={imageIndex}
        />
      </div>
    </div>
  );
};

export default App;

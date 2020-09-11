import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?name=");
  const [info, setInfo] = useState({});
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("url: ", url);
    console.log("info: ", info);
    console.log("results: ", results);
    console.log("search: ", search);
  }, [url, info, results, search]);

  useEffect(() => {
    axios.get(`${url} ${search}`)
      .then((result) => {
        console.log(result);
        setInfo(result.data.info);
        setResults(result.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  return (
    <>
      <header>
      <p>Search</p><input onChange={(e) => {
            setSearch(e.target.value);
        }}
          value={search}
          type="text"
        />
      </header>
      <main className="App">
          <section className='characters'>
          {results.map((result, index) => (
              <Character key={index} result={result} />
          ))}
          </section>
      </main>
    </>
  );
};

export default App;

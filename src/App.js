import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
// import styled from 'styled-components';

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        console.log("get", res.data.results);
        setData(res.data.results);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="name">
        {data.map((person) => {
          return (
            <Character
              key={person.name}
              name={person.name}
              year={person.birth_year}
              films={person.films.length}
              ships={person.starships} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
// const Cards = styled.div`
//   display: flex,
//   justify-content: space-evenly:
//   margin-top: 40px;
//   align-items: center;
//   padding: 10px;
//   background-color: rgba(255, 255, 255, 0.4);
//   color: black;
// `;

// const App = () => {
//   const [pokeData, setPokeData] = useState({});

//   useEffect(() => {
//     axios
//       .get('https://pokeapi.co/api/v2/pokemon')
//       .then((res) => {
//         console.log("res.data", res.data.results);
//         setPokeData(res.data.results);
//       })
//       .catch((err) => console.log("error", err));
//   }, []);

//   return (
//     <Cards
//       className="App"
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-evenly",
//       }}
//     >
//       <div style={{ width: "100%" }}>
//         <h1 style={{ textAlign: "center", color: "white" }}>
//           Pokemon
//       </h1>
//       </div>
//       {pokeData.map((char, index) => {
//         return <Character.key= { index } pokeData = { char } />
//     })}
//     </Cards>
//   );

// const App = () => {
//   const [pokeData, setPokeData] = useState({});

// useEffect(() => {
//   const fetchPoke = () => {
//     axios
//       .get('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(res => {
//         console.log(res.data);
//         setPokeData(res.data);
//       })
//       .catch(err => {

//         });
//     };
//     fetchPoke();
//   }, []);
// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the API in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

//   return (
//     <div className="App">
//       <h1 className="Header">Characters</h1>
//     </div>
//     {pokeData.map((poke, index) => {

//     })}
//   );
// }



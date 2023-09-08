import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let requestPlanets = axios.get(urlPlanets);
    let requestPeople = axios.get(urlPeople);
    let Datas = [];
    Promise.all([requestPlanets, requestPeople])
      .then(responses => {
        const [responsePlanets, responsePeople] = responses;
        responsePeople.data.forEach((data1) => {
          responsePlanets.data.forEach((data2) => {
            if (data1.homeworld === data2.id)
            {
              let newData = data1;
              newData.homeworld = data2;
              Datas.push(newData);
            }
          })
        })
        setCharacters(Datas);
      })
      .catch(error => {
          console.log('Error: ', error);
      });
  }
  return (
    <div>
      <h2>Star Wars Characters</h2>
      {/* <p>See the README of the project for instructions on completing this challenge</p> */}
      {
        characters.map(
          (character, index) => <Character key={index} character={character}/>
        )
      }
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App

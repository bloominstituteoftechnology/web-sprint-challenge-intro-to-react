import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([])
  const [people2, setPeople2] = useState([])
  const [people3, setPeople3] =useState([])

  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/people/1/`)
      .then(res => {
        setPeople(res.data)
        console.log(res.data)
        console.log(people)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/people/2/`)
      .then(res => {
        setPeople2(res.data)
        console.log(res.data)
        console.log(people2)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/people/3/`)
      .then(res => {
        setPeople3(res.data)
        console.log(res.data)
        console.log(people3)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <h2>{people.name}</h2>
      <p>Height:{people.height}</p>
        <p> Mass: {people.mass}</p>
         <p> Color:{people.skin_color}</p>.
      


      <h2>{people2.name}</h2>
      <p>Height:{people2.height}</p>
        <p> Mass: {people2.mass}</p>
         <p> Color:{people2.skin_color}</p>.


      <h2>{people3.name}</h2>
      <p>Height:{people3.height}</p>
        <p> Mass: {people3.mass}</p>
         <p> Color:{people3.skin_color}</p>.
    </div>
  );
}

export default App;

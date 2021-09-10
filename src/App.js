import React, {useEffect, useState} from 'react';
import './App.css';
import CharactersPL from './components/CharactersPL';
import Character from './components/Character';
//import char_info when i have a thing to

//import axios
import axios from 'axios';

//import API
import {BASE_URL} from './constants';


const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ person, setPerson] = useState([]);
  //const {name, height, weight} = props

  // const char = charArray.map(post => {
  //   return post.id === postId ? {...post, likes: post.likes +1} : post;
  // })
  // setCharactes(char);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${BASE_URL}?format=json`)
      //console.log(`${BASE_URL}`)
      .then(res => {
        setPerson(res.data)
      }) /* .catch(err => console.log(err)) */
      return () =>{
        console.log('fetching')
      }
  }, []);

  return (
    <div className="App">
      <h1 className="Header"> Characters </h1>
      {person &&
      <div>
      <CharactersPL className='container' person={person.name} > something should show </CharactersPL>
      </div>
      }
    </div>
      
  );
}

export default App;

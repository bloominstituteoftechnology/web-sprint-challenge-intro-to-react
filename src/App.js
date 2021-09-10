import React, {useEffect, useState} from 'react';
import './App.css';
import CharactersPL from './components/CharactersPL';

//import axios
import axios from 'axios';

//import API
import {BASE_URL} from './constants';


const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ starwars_g, setCharacters] = useState(null);
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
        setCharacters(res.data)
      }) 
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header"> Characters </h1>
      <CharactersPL className='container' > something should show </CharactersPL>
    </div>
  );
}

export default App;

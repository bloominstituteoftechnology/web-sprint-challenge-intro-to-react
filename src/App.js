import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Character from './components/Character'
import rickandmorty from './constants'
import './App.css';

import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const [myCharacters, setMyCharacters] = useState('')

  useEffect(() => {
    axios
      .get(`${rickandmorty.characters}`)
      .then((res) => {
        setMyCharacters(res.data)
      })
      .catch((err) => {
        console.log("Ups! There's something broken in here!")
      })
  }, [])


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // console.log('Mauricio', myCharacters.results)

  const listAllCharacters = myCharacters.results

  return (
    <Container>
      <h1 className="Header">Characters</h1>

      <CardColumns>
      {
        listAllCharacters && (listAllCharacters.map((item) => {
          return <Character key={item.id} data={item} />
        }))
      }
      </CardColumns>

      {/* <Character name="YoMerengue" data={myCharacters.results} /> */}
    </Container>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './components/Header'
import Character from './components/Character'
import rickandmorty from './constants'

import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {

  const [myUrl, setMyUrl] = useState(`${rickandmorty.characters}`)
  const [myCharacters, setMyCharacters] = useState([])

  useEffect(() => {
    axios
      .get(`${myUrl}`)
      .then((res) => {
        setMyCharacters(res.data)
      })
      .catch((err) => {
        console.log("Ups! There's something broken in here!")
      })
  }, [myUrl])


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const listAllCharacters = myCharacters.results

  return (
    <>
      <Header />
      
      <Container>

        <CardColumns>
        {
          listAllCharacters && (listAllCharacters.map((item) => {
            return <Character key={item.id} data={item} />
          }))
        }
        </CardColumns>

        
          <Button variant="primary" onClick={() => setMyUrl(`${myCharacters.info.prev}`)}>Prev</Button>{' '}
          <Button variant="primary" onClick={() => setMyUrl(`${myCharacters.info.next}`)}>Next</Button>{' '}
        


      </Container>
    </>
  );
}

export default App;

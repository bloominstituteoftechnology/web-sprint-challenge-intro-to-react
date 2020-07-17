import React, {useState, useEffect} from 'react';
import {requester} from 'easier-requests';
import './App.css';
import Character from './Character.jsx';

function getCharacters(setCharacters) {
  // holds each new copy of character array
  let characters = [];

  async function _getCharacters(setCharacters,
                                page='http://swapi.dev/api/people/') {
    const id = requester.createUniqueID();
    await requester.get(page, id);

    const response = requester.response(id).data;
    console.log(response);


    characters = [...characters].concat(response.results);
    setCharacters(characters);
    console.log(characters);

    if (response.next)
      _getCharacters(setCharacters, response.next);
  }

  _getCharacters(setCharacters);
}

export default function App () {
  const [characters, setCharacters] = useState([]);

  useEffect(() => getCharacters(setCharacters), []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((character) => <Character character={character}/>)}
    </div>
  );
}

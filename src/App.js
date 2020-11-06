import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SearchBar from './components/SearchBar/SearchBar'
import Characters from './components/Characters/Characters'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const fetchCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character')
        .then((res) => {
          setCharacters(res.data.results);
        })
        .catch((err) => {
          console.log('Something went wrong. Here is a placeholder, enjoy!');
          let placeHolderData = {};
          placeHolderData.name = 'Rick Sanchez';
          placeHolderData.status = 'Alive';
          placeHolderData.species = 'Human';
          placeHolderData.origin = {};
          placeHolderData.origin.name = 'Earth (C-137)';
          placeHolderData.location = {};
          placeHolderData.location.name = 'Earth (Replacement Dimension)';
          let array = [];
          array.push(placeHolderData);
          setCharacters(array);
        }

        )

    };
    fetchCharacters();
  }, []);

  const characterToggled = characterId => {
    console.log(characterId);
    setCharacters(characters.map(character => {
      return character.id === characterId
        ? { ...character, detailsOpened: character.detailsOpened = !character.detailsOpened }
        : character
    }));
  };

  return (
    <div className="App">
      <div>
        <h1 className="Header">Rick and Morty Characters</h1>
      </div>
      {/* <SearchBar /> */}
      <Characters characters={characters} characterToggled={characterToggled} />
    </div>
  );
}

export default App;

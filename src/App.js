import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const CharacterPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // setting thinfs up for search value changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(handleSearchChange);
    console.log(searchTerm);
  };

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // start making the request
  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/vehicles').then((res) => {
      console.log(res.data.results);

      const initialArray = res.data.results;
      // searching
      const filteredData = initialArray.filter((Character) => {
        return Character.name
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });
      setData(filteredData);
    });
  }, [searchTerm]);

  return (
    <CharacterPageDiv className='App'>
      <h1 className='Header'>Characters</h1>
      <label>
        search for a vehicle here:
        <input
          type='text'
          id='inputSearch'
          name='search'
          className='searchVal'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </label>
      <Button onClick={handleSearchChange}>Clear Search..</Button>
      <Character characterArray={data} />
    </CharacterPageDiv>
  );
};

export default App;

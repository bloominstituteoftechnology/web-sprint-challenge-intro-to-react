import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';
import CharacterList from './components/CharacterList';
import RangeSelection from './components/RangeSelection';

const App = () => {
  const [range, setRange] = useState([1, 20]);

  return (
    <div className="App">
      <Heading>Pokemon!</Heading>
      <RangeContainer>
        <p>Enter a range below to grab a range of Pokemon by their Pokedex numbers:</p>
        <RangeSelection range={range} setRange={setRange} />
      </RangeContainer>
      <CharacterList range={range} />
    </div>
  );
};

const Heading = styled.h1`
  font-family: 'Krona One', sans-serif;
  font-size: 3.5rem;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const RangeContainer = styled.div`
  padding: 5px;
  background-color: skyblue;
`;

export default App;

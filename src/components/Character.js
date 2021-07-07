// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Character = (props) => {

const H2 = styled.h2`
  color: black;
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

  return (
    <div className="App">
      <H2>{props.name}</H2> 
    </div>
  );
}

export default Character;

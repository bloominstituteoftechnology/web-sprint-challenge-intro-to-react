/* eslint-disable no-lone-blocks */
// Write your Character component here
import React from 'react';

function Character(props) {
  const characterDeets = props.props;
  console.log(characterDeets);
  const newList = characterDeets.map(i => {
    return (
      <div>
        <p>My name is {i.name}</p>
        <p>Check me out</p>
        <p>Gender: {i.gender}</p>
        <p>Birth: {i.birth_year}</p>
        <p>Hair Color: {i.hair_color}</p>
        <p>Eyes: {i.eye_color}</p>
        <p>Height in cm: {i.height}</p>
      </div>
    )
  });
return newList
}

export default Character
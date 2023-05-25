// Write your Character component here

import CharacterData from "./Character-Data";
import React from 'react';

const Character = (props) => {
  const { data } = props;
  return ( 
    <div className="character-container-wrapper">
      {data.map(element => {
        return <CharacterData key={element.id} name={element.name} eye_color={element.eye_color} height={element.height} gender={element.gender} 
        mass={element.mass} birth_year={element.birth_year} hair_color={element.hair_color} skin_color={element.skin_color}></CharacterData>
      })}
    </div>
   );
}

export default Character;
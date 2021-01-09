import React from 'react';
import '../App.css';


export default function Character({data}) {
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = data;
  console.log("data in Character: ", data);

  console.log("Name: ", name);

  return (
    <div className="character-container">

    {name}


    </div>
  );
}
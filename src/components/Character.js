// Write your Character component here

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharCard from './CharCard';

export default function Character(char) {
    
    const [character, setCharacter] = useState([]);
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
          .then(res => {
            setCharacter(res.data)
          })
          .catch(err => console.log(err))
    }, []);

    return (
        <div>
            {
            character.map((char) => {
                return (
                    <CharCard 
                        name={char.name}
                        birthYear = {char.birth_year}
                        height = {char.height}
                        mass = {char.mass}
                        hairColor = {char.hair_color}
                        skinColor = {char.skin_color}
                        eyeColor = {char.eye_color}
                        gender = {char.gender}
                    />
                )
            })
            }
        </div>
    );
}
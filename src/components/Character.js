// Write your Character component here

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

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
        <Character>
            
        </Character>
    );
}
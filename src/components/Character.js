// Write your Character component here

import React, {useState} from 'react';
const listOfCharacters [
{"id":2,
"name":"Morty Smith",
"status":"Alive",
"species":"Human",
"type":"",
"gender":"Male",
"origin":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},
"location":{"name":"Earth (Replacement Dimension)",
"url":"https://rickandmortyapi.com/api/location/20"},
"image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg"
}
]

const[character, setCharacter] = useState()
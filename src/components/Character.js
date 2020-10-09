// Write your Character component here

import React from 'react'


export default function Character(character) {
    return (
        <Character>
            {character.image}
            {character.name}
            {character.location}
            {character.episode}
        </Character>
    )
}

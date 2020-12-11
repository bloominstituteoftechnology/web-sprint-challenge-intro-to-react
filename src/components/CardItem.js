import React from 'react';

const CardItem = ({ character }) => {
    return (
        <div className='cardItem'>
            {/* Thumbnail image */}
            <img src = {character.image} alt='Rick and Morty Charcater'/>
            <ul>
    <li>{character.name}</li>
    <li>{character.gender}</li>
    <li>{character.origin.name}</li>
    <li>{character.species}</li>
    <li>{character.status}</li>
            </ul>
        </div>

    )
}

export default CardItem;
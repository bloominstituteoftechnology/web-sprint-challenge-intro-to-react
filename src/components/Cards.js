import React from 'react';
import CardItem from './CardItem'

const Cards = ({ characters }) => {
    return(
        <div>
            {characters.map(character => {
                return <CardItem key={character.id} character={character} />
            })}
        </div>
    )
}
export default Cards;


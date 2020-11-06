import React from 'react'
import Character from './Character'

const Characters = (props) => {
    const { characters, characterToggled } = props;

    return (
        <div className='characterCard'>
            {characters.map((character) => {
                return <Character character={character} characterToggled={characterToggled} />
            })}
        </div>
    );
};

export default Characters;

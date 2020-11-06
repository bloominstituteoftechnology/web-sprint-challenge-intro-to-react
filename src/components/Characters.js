import React, {useState} from 'react';
import Character from './Character'

const Characters = (props) => {
    const {variations} = props;

    return (
        <div className='characters-container'>
            {/* {variations.map(variation => {
                return <Character key={variation.id} variationName={variation.name} variationImage={variation.image} />
            })} */}
        </div>
    );
};







export default Characters;
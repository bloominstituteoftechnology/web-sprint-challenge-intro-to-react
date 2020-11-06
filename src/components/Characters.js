import React, {useState} from 'react';
import Character from './Character'

const Characters = (props) => {
    const {variations} = props
    console.log(variations)
    

    return (
        <div className='characters-container'>              
            {variations.map(variation => {
                return <Character key={variation.id} variationImage={variation.image} variationName = {variation.name}/>
            })}
        </div>
    );
};







export default Characters;
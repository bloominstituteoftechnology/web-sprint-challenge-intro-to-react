import React from 'react';

export default function Character(props){
    const { name, birthYear } = props;
    debugger
    

    return (
        <div className='character-card'>
           <div className='individual-character'>
                <p>{name} - {birthYear}</p>
           </div>
            
        </div>

    );
}



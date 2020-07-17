import React, { useState, useEffect } from 'react'; 

function CharacterCard(props) {

    return (
        <div>
            <p>Gender:{props.gender} </p>
            <p>DOB:{props.birthday}</p>
            <p>Hair Color:{props.hairColor}</p>
            <p>Eye Color:{props.eyeColor}</p>
            <p>Mass:{props.mass}</p>
            <p>Rides:{props.rides} </p>
        </div>
    ); 
}

export default CharacterCard; 
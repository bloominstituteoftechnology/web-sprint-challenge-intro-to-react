import React from 'react';
// Write your Character component here


const Character = (props) => {

    return (
        <div className='card'>
        <img src={props.result.image} alt={`Photo of ${props.result.name}`} />
        <p>Name: {props.result.name}</p>
        <p>Location: {props.result.location.name}</p>
        <p>Species: {props.result.species}</p>
        <p>Status: {props.result.status}</p>
        <p>Type: {props.result.type}</p>
    </div>
    )
}


export default Character
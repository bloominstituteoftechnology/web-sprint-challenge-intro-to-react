import React from 'react'
import { Character } from './Character'

function Characters(props) {
    const chars = props.data;
    console.log(props.data);
    return (
        <div>
            {props.children}
            {chars.map((char) => {
                return <Character id={char.name} data={char} key={char.name}></Character>
            })}
        </div>
    )
}

export {
    Characters
}

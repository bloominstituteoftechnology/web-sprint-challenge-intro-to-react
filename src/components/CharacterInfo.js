import React from 'react'

export default function CharacterInfo(props) {
    const { characterInfo, close } = props

    return (
        <>
            <p>{characterInfo.name}</p>
            <p>Gender:{characterInfo.gender}</p>
            <p>Birthday:{characterInfo.birth_year}</p>
            <p>Starred In:{characterInfo.films.join(', ')}</p>
            <p>Home World:{characterInfo.homeworld}</p>
            <button onClick={close}>Close</button>
        </>
    )
}
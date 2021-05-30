// Write your Character component here
import React from 'react'

export default function Character({ info, action }) {
    return (
        <>
            <button onClick={() => action(info)}>{info.name}</button>

        </>
    )
}

import React from 'react'


export default function Char({char}) {
    return (
        <div className='Char-character'>
            <p>{char.name}</p>
        </div>
    )
}
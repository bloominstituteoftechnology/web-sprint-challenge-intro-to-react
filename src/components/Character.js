import React from 'react'
import Char from "./Char"

export default function Characters(props) {
    const { chars } = props
    console.log(chars)
    return (
        <div className='char-container'>
            <div className='char-info'>
                <div>{chars.map(char => {
                    return <Char key={char.name} char={char} />
                })}</div>
            </div>
            </div>
    )
}

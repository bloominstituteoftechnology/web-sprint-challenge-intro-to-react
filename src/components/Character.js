import React from 'react'


export default function Characters(props) {
const {chars} = props
console.log(chars)
    return (
        <div className='char-container'>
            <div className='char-info'>
                <div>{chars.map(char => {
                    return <div>{char.name}</div>
                })}</div>
            </div>
        </div>
    )
}

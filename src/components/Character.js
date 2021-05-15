import React from 'react'


export default function Characters(props) {
const { char } = props;
console.log(char)
    return (
        <div className='char-container'>
            <div className='char-info'>
                <div>{char[0].name}</div>
            </div>
        </div>
    )
}

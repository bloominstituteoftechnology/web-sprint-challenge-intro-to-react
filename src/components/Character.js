import React from 'react'

const Character = ({ data }) => {
    return (
        <div>
            <h1>{ data.name }</h1>
        </div>
    )
}

export default Character
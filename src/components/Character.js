// import { data } from 'msw/lib/types/context'
import React from 'react'

const Character = (props) => {
    const {data}=props
    return (
        <div class='parent'>
        <div class='name'>
            <h2>{data.name}</h2>
        </div>
        <div class='info'>
            <p>Birth Year: {data.birth_year}</p>
            <p>Eye Color: {data.eye_color}</p>
            <p>Gender: {data.gender}</p>
            <p>Hair color: {data.hair_color}</p>
            <p>Mass: {data.mass}</p>
            <p>Skin Color: {data.skin_color}</p>
        </div>
        </div>
    )
}

export default Character
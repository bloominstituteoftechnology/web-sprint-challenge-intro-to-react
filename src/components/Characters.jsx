import React from 'react'
import styled from 'styled-components'

const Character =(props) => {
    console.log(props)

    const{character} = props

    const Article = styled.article`
        width = 300px;
        background-color: cornsilk;
        border-radius: 1rem;
        border: 1px dotted black;

    `;

    const Image = styled.image `
        borer-radius: 50%;
    `;
    return (
        <article >
                    <img src ={character.image} alt ={character.name}/>
                    <h2>{character.name}</h2>
                    <p>{character.status}</p>
                    <p>{character.name} is a {character.gender}
                    {character.species} whis is a {character.status}</p>
                    </article>

    )
}
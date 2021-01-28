// Write your Character component here
// Write your Character component here
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const defaultImage = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
const apiURL = 'https://rickandmortyapi.com/api/character/'

function Character() {
    const [characterID, setCharacterID] = useState('')
    const [characterName, setCharacterName] = useState('')
    const [characterStatus, setCharacterStatus] = useState('')
    const [characterSpecies, setCharacterSpecies] = useState('')
    const [characterImage, setCharacterImage] = useState(defaultImage)

    const fetchCharacter = () => {
        let random = Math.floor(Math.random() * 672);

        Axios
            .get(apiURL + random)
            .then(({data}) => {
                console.log('data', data)
                setCharacterID(data.id)
                setCharacterName(data.name)
                setCharacterStatus(data.status)
                setCharacterSpecies(data.species)
                setCharacterImage(data.image)
            })
            .catch(function (error) {
                //handle error
                console.log(error)
            })
    }

    useEffect(() => {
        fetchCharacter()

    }, [])

    const fetchDifferentCharacter = () => {
        fetchCharacter()
    }

    return (
        <StyledCharacter>
            <h1>Rick and Morty Characters</h1>
            <h2>Name: {characterName}</h2>
            <h3>ID: {characterID}</h3>
            <img src={characterImage} alt={characterName} />
            <br />
            <h2>Status: {characterStatus}</h2>
            <h3>Species: {characterSpecies}</h3>
            <button onClick={fetchDifferentCharacter}>Get Different Character</button>
        </StyledCharacter>
    )
    
}


const StyledCharacter = styled.main`
    h1{
        color: aquamarine;
        text-shadow: 5px 5px 10px goldenrod;
    }
    h2 {
        color: greenyellow;
        text-shadow: 1px 1px 5px #fff;
    }

    h3 {
        color: springgreen;
        text-shadow: 1px 1px 5px #fff;
    }

    img {
        border-radius: 10px;
    }
    button {
        padding: 5px;
        border-radius: 10px;
        border: 1.5px dotted goldenrod;
        width: 300px;
        font-family: 'Grandstander', cursive;
        color: black;
        font-size: 20px;
        background-color: mediumturquoise;
        text-shadow: 1px 1px 5px #fff;
        &:hover {
            background-color: mediumaquamarine;
            color: white;
            text-shadow: 1px 1px 5px #fff;
            cursor: pointer;
        }
        &:focus {
            border: none;
            outline: none;
        }
        &:active {
            border: none;
            outline: none;
        }

    }
`

export default Character
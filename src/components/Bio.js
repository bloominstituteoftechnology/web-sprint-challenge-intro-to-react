import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledBio = styled.div`
    li {
        color: ${pr => pr.theme.secondaryColor}
    }
`;

function Bio(props) {
    const {displayChar, close} = props
    const [info, setInfo] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people`)
            .then(res => {
                setInfo(res.data);
            })
            .catch(err => {
                debugger
            })
    }, [displayChar])

    return (
        <StyledBio>
            
                {info &&
                <ul>
                    <li>Name: {info.name}</li>
                </ul>
                }
            
            
            
                {/* <li>Height: {info.height}</li>
                <li>Mass: {info.mass}</li>
                <li>Hair Color: {info.hairColor}</li>
                <li>Skin Color: {info.skinColor}</li>
                <li>Eye Color: {info.eyeColor}</li>
                <li>Birth Year: {info.birthYear}</li>
                <li>Gender: {info.gender}</li>
                <li>Homeworld: {info.homeworld}</li>
                <li>Films: {info.films}</li>
                <li>Species{info.species}</li>
                <li>Vehicles: {info.vehicles}</li>
                <li>Starships: {info.starships}</li>
                <li>Created: {info.created}</li>
                <li>Edited: {info.edited}</li>
                <div>Picture:
                    <img src={info.url}></img>
                </div> */}
            {/* </ul> */}
            <button onClick={close}>Close</button>
        </StyledBio>
    )

}

export default Bio
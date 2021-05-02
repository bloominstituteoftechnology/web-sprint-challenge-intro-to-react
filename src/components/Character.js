// Write your Character component here
import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Characters(props) {
    const { characterId, close } = props
    const [ charInfo, setCharInfo ] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(({data}) => setCharInfo(data))
        .catch(err => console.log(err))
    }, [characterId])
    return (
        <div className='infoContainer'>
            <h2>Info of Target</h2>
            {
                charInfo &&
                <>
                <p>Gender: {charInfo.gender}</p>
                <p>Height: {charInfo.height}</p>
                <p>Mass: {charInfo.mass}</p>
                <p>Birth Year: {charInfo.birth_year}</p>
                <p>Eye Color: {charInfo.eye_color}</p>
                <p>Hair Color: {charInfo.hair_color}</p>
                <p>Skin Color: {charInfo.skin_color}</p>
                </>
            }
            <button onClick={close}>Close File</button>
        </div>
    )
}
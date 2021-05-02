// Write your Character component here
import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Characters(props) {
    const { characterId, close } = props
    const [ info, setInfo ] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${characterId}`)
        .then(({data}) => setInfo(data))
        .catch(err => console.log(err))
    }, [characterId])
    return (
        <div className='infoContainer'>
            <h2>Info of Target</h2>
            {
                info &&
                <>
                <p>Gender: {info.gender}</p>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
                <p>Birth Year: {info.birth_year}</p>
                <p>Eye Color: {info.eye_color}</p>
                <p>Hair Color: {info.hair_color}</p>
                <p>Skin Color: {info.skin_color}</p>
                </>
            }
            <button onClick={close}>Close File</button>
        </div>
    )
}
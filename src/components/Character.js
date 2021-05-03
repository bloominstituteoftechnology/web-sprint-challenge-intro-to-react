// Write your Character component here
import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Characters(props) {
    const { name, close } = props
    const [ charInfo, setCharInfo ] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(({data}) => setCharInfo(data))
        .catch(err => console.log(err))
    }, [name])
    return (
        <div className='infoContainer'>
            <h2>Info of Target</h2>
            {
                charInfo &&
                <>
                <ul>
                    {charInfo.map(results => <li key={results.name}>
                        {results.name}<br />
                        Height: {results.height}<br />
                        Gender: {results.gender}<br />
                        Mass: {results.mass}<br />
                        Hair Color: {results.hair_color}<br />
                        Skin Color: {results.skin_color}<br />
                        Eye Color: {results.eye_color}<br />
                        Birth Year: {results.birth_year}<br />
                    </li>)}
                </ul>
                </>
            }
            <button onClick={close}>Close File</button>
        </div>
    )
}
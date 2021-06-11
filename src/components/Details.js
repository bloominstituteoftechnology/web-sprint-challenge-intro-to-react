import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Details = (props) => {
    const { characterIdx, close } = props
    const [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then(res => { 
            setDetails(res.data) 
        })
        .catch(err => {
            console.log(err)
        })
    }, [characterIdx])

    return (
        <div className='container'>
            <h3>Details:</h3>
            {
                details &&
                <>
                    <p>{details.gender}</p>
                    <p>{details.height}</p>
                    <p>{details.mass}</p>
                    <p>{details.birth_year}</p>
                    <p>{details.eye_color}</p>
                    <p>{details.hair_color}</p>
                    <p>{details.skin_color}</p>
                </>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}

export default Details
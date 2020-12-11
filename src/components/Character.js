// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from "axios"

export default function Character(props) {
    const { charID, close } = props;
    const [ details, setDetails] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/`)
          .then(res => { 
              setDetails(res.data) 
            })
          .catch(err => { 
              console.log(err) 
            })
      }, [charID]);

    return (
        <div className= "container-fluid">
            <div className>
                <h3>Name: {details.name}</h3>
                <p>Gender: {details.gender}</p>
                <p>Birth Year: {details.birth_year}</p>
                <p>Skin Color: {details.skin_color}</p>
                <p>Eye Color: {details.eye_color}</p>
                <p>Hair Color: {details.hair_color}</p>

                
            <button onClick={close}>Close</button>
            
            </div>
        </div>
    )
}
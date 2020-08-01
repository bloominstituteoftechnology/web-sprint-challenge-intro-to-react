// Write your Character component here
import React, { useEffect, useState } from 'react'
import axios from "axios"
import starWarsCard from './starWarsCard.js'

export default function Characters() {
    const [starWarsList, setList] = useState([])
        useEffect(() => {
            axios.get('https://swapi.dev/api/people/')
            .then(response => {
                console.log(response)
                setList(response.data)
          })
            .catch(error => console.log(error))
        }, [])
            return (
              <div className="star-wars-list">
               {/* {starWarsList.map(data => (
          <starWarsCard key={data.name} />
        ))}    */}
              </div>
        )
    }

    // console.log(Characters.name[0]);
    

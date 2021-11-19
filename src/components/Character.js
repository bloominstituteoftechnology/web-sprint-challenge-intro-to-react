// Write your Character component here
import React, {useState, useEffect } from 'react'
import axios from 'axios'

export default function Character(props) {
    const {characterId} = props
    const [details, setDetails] = useState(null)

    useEffect(()=> {
        axios.get('https://swapi.dev/api/people/?format=api')
        .then(res=> {
         setDetails(res.data)
          
        }).catch(err=>{
          console.log(err)
        })
      },[characterId])

      const newDetails = details.map(det =>{
          return det
      })

      return (
          <div className='container'>
              <li>Birth Year {newDetails.birth_year}</li>
              <li>Films {newDetails.films}</li>
              <li>gender {newDetails.gender}</li>
              <li>Starships {newDetails.starships}</li>
          </div>
      )

}
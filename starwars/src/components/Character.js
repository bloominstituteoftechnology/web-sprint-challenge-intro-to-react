// Write your Character component here
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CharacterCard from './CharactersCard'
import StarshipsCard from './starShipsCard'


function Characters() {
    const [chars, setCharacters] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(response => {
            console.log(response)
            setCharacters(response.data.results)
        })
        .catch('error!')
    },[])

    return (
        
        <div>

            {chars.map(people => {
                   return (
                       <CharacterCard 
                       name={people.name}
                       height={people.height}
                       mass={people.mass}
                       birthYear={people.birth_year}
                       homeWorld={people.homeworld}
                       starShips={people.starShips}
                        

                       />

                    
                       
                   )
               })}
             
        </div>
    )

}

export default Characters
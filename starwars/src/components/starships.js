import React, {useEffect, useState} from "react"
import axios from 'axios'
import StarshipsCard from './starShipsCard'


function Starships() {
    const [ships, setShips] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(response => {
            console.log(response)
            setShips(response.data.results)
        })
        .catch('error!')
    },[])

    return (
        
        <div>

            {ships.map(items => {
                   return (
                       <StarshipsCard
                       ships={items.starships}


                       />
                   )
               })}
             
        </div>
    )

}

export default Starships
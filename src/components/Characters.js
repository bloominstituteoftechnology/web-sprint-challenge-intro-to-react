import React, { useEffect, useState } from 'react';
import Character from './Character';
import axios from 'axios';
  


export default function Characters() {
    const [ characterList, setCharacterList ] = useState([])
    useEffect(() => {
        async function fetchCharacters() {
            const resp = await axios.get(`https://swapi.dev/api/people`);
            const characterData = resp.data.results;
            setCharacterList(characterData)
        }
        fetchCharacters();  
    }, [])

      return (<div>  
            {characterList ? characterList.map(charObj => {
                    // console.log(charObj)
                    return <Character
                        key={charObj.name}
                        info={charObj}
                        name='name'
                    />
                }):<div>TESTTESTESTESTESTEST</div>}
         </div>
        )

    // return (<div> {  useEffect(() => {<Character />}) } </div>)
}




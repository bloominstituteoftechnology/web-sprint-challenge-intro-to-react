// Write your Character component here
import React, {useState, useEffect} from 'react'
import CharacterInfo from './CharacterInfo'




function Character ({info, action}) {






    return(



        <div>
            {info.name}
            <button onClick={() => action(info.name)}>
                {info.birth_year}
            </button>
        </div>
    )
}


export default Character
import React from 'react'
import Character from './Character';

const Characters = (props)=>{
    const {people} = props;
    
    
     
    


    return(
        <div>
            {
                 people.map((character,index)=>
                    <Character key ={character.id} character={character} />
                )
            }
        </div>

    );
}
export default Characters;
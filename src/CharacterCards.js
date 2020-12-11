import React from "react"


export default function CharacterCards(props){


const {character} = props








   return(

     <div>
      
     <div>
         <div>
         <div>
                <h2>{character.id}</h2>
                 <h2>{character.name}</h2>
                <h3>{character.status}</h3>
                 <h3>{character.species}</h3>
                 <h3>{character.type}</h3>
                <h3>{character.url}</h3>
        </div>

        </div>
         </div>
     </div>
   )








}
import CharacterCards from "./CharacterCards"
import React from "react"


export default function Characters (props){

  const {characters } = props;

 

    return(
        <div>
        {characters.map((item)=>

        <CharacterCards character={item}/>
        
        
        
        
      
        
)}

        </div>







    )


        
        
        
    
    
 
    }
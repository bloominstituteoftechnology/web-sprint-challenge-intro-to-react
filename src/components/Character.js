// Write your Character component here
import React from "react"
import CharacterCards from "./CharacterCards"



const Character = (props) => {
const {character} = props  //deconstructed props\\
console.log(character) 
return( 
   <>

<div>
{character && character.map((item)=>  // logical expression to determine if the value on the left is truthy. Its like a switch turning on and off.
< CharacterCards character = {item} /> // 
// the parameter item is holding props for the map to replicate character cards
)
}
</div>   
</>  
)
}


   
 





export default Character






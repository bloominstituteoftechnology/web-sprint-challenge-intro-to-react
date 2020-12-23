// Write your Character component here
import CharacterCards from "./CharacterCards"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


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
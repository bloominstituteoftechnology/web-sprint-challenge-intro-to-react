import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterCards from "./CharacterCards"



export default function Characters (props){

    const {characters } = props;
  
   
  
      return(
          <div>
          {characters.map((characters)=>
  
          <CharacterCards characters={characters}/>
          )}
  
          </div>
          )
  
  }
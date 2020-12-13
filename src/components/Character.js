// Write your Character component here
import React from "react";
import {alert} from "reactstrap";
import styled from "styled-components";

//there are two ways to export inline or In its individual line
// written: export default App;
export default function createCharacter(props){
    const [eachCharacter] = props;
    
    return (
        <div>
            <img src = {eachCharacter.image} alt = "Character Name"/>
            <h1 className = "name">{eachCharacter.name}</h1>
            
        </div>
    )
}
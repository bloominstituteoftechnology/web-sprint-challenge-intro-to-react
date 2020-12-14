// Write your Character component here
import React from "react";
import {alert} from "reactstrap";
import styled from "styled-components";

//there are two ways to export inline or In its individual line
// written: export default App;
export default function createCharacter(fn){
    // const [eachCharacter] = props;
    
    return (
        <div>
            <img src = {fn.image} alt = "Character Name"/>
            <h1 className = "name">{fn.name}</h1>
            
        </div>
    )
}
// Write your Character component here
/*

 Obtain a list of characters. One or several requests might be needed, depending on the API.
Set the list of characters into state.
Render your characters to the screen:

    Build a React component named 'Character' to render an individual character.
    Map over the list in state, and for each character render a Character to the page.
    You must display at least one element for each character in the data set.
    The elements must be styled with styled-components - don't rely on browser default styles.

*/

import React,{useState, useEffect } from "react";
import axios from "axios";
import Char from "./Char";
const Character = ({name, dob, gender, mass}) =>{


    if(!name) return <h2>Loading...</h2>;
    return (
        <Char name={name} dob={dob} gender={gender} mass={mass} />
    );
};


export default Character;
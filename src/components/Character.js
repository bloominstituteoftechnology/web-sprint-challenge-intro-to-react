import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
// Write your Character component here

const Character = () => {

    const CharacterStyle = styled.div `
    padding: 5px;
    border: 3px solid black;
    margin-bottom: 5%;
    margin-left: 40%;
    margin-right: 40%;
    font-weight: bold;
    background: white;
    `

    const [charList, setCharList] = useState([]);

   useEffect(() => {

   
        axios
        .get(`https://swapi.dev/api/people`)
        .then(res => {

           setCharList(res.data);
    
        })
        .catch(err => {
            console.log(err)
        });


},[])



    return (
    <div>
        
        {charList.map((char) => {
            return <CharacterStyle>{char.name}</CharacterStyle>
        })}
    </div>);
}

export default Character;
// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import People from "./People"

const CharacterCard = styled.div`
    color: red;
    margin: 10px;
    padding: 10px;
    background-color: lightblue;
    border-radius: 15px;
    width: 40%;
    transition: height 0.5s;
`;
const Characters = props => {

const [characters, setCharacters] = useState([]);
        useEffect(() => {
        axios
        .get ("https://swapi.dev/api/people")
        .then(res => {
            console.log("Finding Characters", res);
        setCharacters(res.data.results);
    })
        .catch(error => {
            console.log("StarWars not Working Browswer has Covid-19", error);
    });
},[])
               return (
                   
        <div>
            {characters.map((characters) => {
               return (
                   <div>
                        <CharacterCard>
               <People 
                    key = {characters.id}
                    name ={characters.name} 
                    height ={characters.height}
                    home ={characters.homeworld} 
                    species ={characters.species}
               />
                        </CharacterCard>
                </div>);
            })}
        </div>
    );
};
 
export default Characters;

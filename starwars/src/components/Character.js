// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import People from "./People"

const Characters = props => {

const [characters, setCharacters] = useState([]);
        useEffect(() => {
        axios
        .get ("https://swapi.dev/api/people/")
        .then(res => {
            console.log("Finding Characters", res);
        setCharacters(res.data.results);
    })
        .catch(error => {
            console.log("StarWars not Working Browswer has Covid-19", error);
    });
},[])

            console.log(characters);

    return (
        <div>
            {characters.map(characters => {
               return (<People 
                
                name ={characters.name}
                home ={characters.homeworld} 
                species ={characters.species}
                />);
            })}
        </div>
    );

};
 
export default Characters;
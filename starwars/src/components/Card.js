import React, {useState, useEffect} from "react";
import axios from "axios";
import Character from "./Character";

export default function Card(){

    const [character, setCharacter] = useState([]);

    useEffect(() => {

        axios

        .get("https://swapi.py4e.com/api/people/")

        .then(response => {
            console.log(response.data.results);
            setCharacter(response.data.results);
        })

        .catch(error => {
            console.log("Error: ", error);
        })
    },[]);

    return(
        <div className="CardContainer">
            {character.map((character, i) => {

                return <Character

                key={i}

                name={character.name}

                birth_year={character.birth_year}

                height={character.height}

                hair_color={character.hair_color}

                eye_color={character.eye_color} 


                />;
                
            })}
            
        </div>
    );
}


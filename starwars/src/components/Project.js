import React, { useState, useEffect } from "react";
import axios from "axios";
import PorjectCard from "./ProjectCard";

const Project = () => {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios.get("https://swapi.dev/api/planets/3/ ").then((res) => {
      console.log(res);
      setCharacter(res.data);
    });
  }, []);
  return (
    <div>
      <PorjectCard 
     name={character.name}
     created={character.created}
     climate={character.climate}
     diameter={character.diameter}
     edited={character.edited}
     gravity={character.gravity}
     population={character.population}
     rotation={character.rotation_period}
     surface={character.surface_water}
     terrain={character.terrain}
     
      
      />
    </div>
  );
};

export default Project;
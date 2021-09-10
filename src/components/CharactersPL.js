import React, { useEffect, useState } from "react";
import Character from "./Character";

export default function CharactersPL (props){
    let { name } = props;



   // const[ characters, setCharactersPL] = useState(null);

    //we want to use 

    return (
        <div className='container'> 
            {
                name.map((name, idx) => {
                return <Character name={name.results.idx}  />
                })
            }
        </div>
    );
};
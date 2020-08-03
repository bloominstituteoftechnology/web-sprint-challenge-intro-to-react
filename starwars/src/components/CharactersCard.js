import React from 'react'
import { Button } from 'reactstrap';



const CharacterCard = props => {
    return (
        <ul>
                <Button class="p-3 mb-2 bg-primary text-white">{props.name}</Button>
                <p class=".text-white">Height: {props.height} cm, Weight: {props.mass} kg Birth year: {props.birthYear}</p>
                {/* <p>Height: {props.height} </p>
                <p>Mass: {props.mass}</p> 
                <p>Birth Year: {props.birthYear} </p>
                <p>Star Ships: <img src={props.starShips} /></p>  */}
                {/* <img src={props.homeWorld} /> */}

            
        </ul>
        
       
    
    )
    
}

export default CharacterCard
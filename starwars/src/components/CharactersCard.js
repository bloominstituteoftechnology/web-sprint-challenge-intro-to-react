import React from 'react'
import { Button } from 'reactstrap';
import styled from 'styled-components'



const CharacterCard = props => {
    return (
        <ul>    
            
            <div><Button className="p-3 mb-2 bg-primary text-white">{props.name}
        <p class=".text-white">Height: {props.height} cm, Weight: {props.mass} kg Birth year: {props.birthYear}</p>
        
        </Button>
          
    </div>
                
            
        </ul>
        
       
    
    )
    
}

export default CharacterCard
import React from 'react'
import styled from 'styled-components'




const CharacterCard = props => {
    const Square = styled.a`
    @keyframes fade {
        from {background-color: #A3C2C4;}
        to {background-color: ghostwhite;}
      }
    margin-right: 10px;
    animation-name: fade;
    animation-duration: 45s;
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 20rem;
    background: #A3C2C4;
    color: white;
    border: 2px solid black;
    `
    return (
        <ul>    
            
            <div>
                <Square >{props.name}
    <p class=".text-white">Height: {props.height} cm, Weight: {props.mass} kg Birth year: {props.birthYear} </p>
   
        
        </Square>
        
          
    </div>
                
            
        </ul>
        
       
    
    )
    
}

export default CharacterCard
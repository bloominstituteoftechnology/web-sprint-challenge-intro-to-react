import React from "react"
import styled from "styled-components";


// Write your Character component here
export default function Character(props) {
    const {name, status, species, image, origin} = props;



    return (
        <Everything className= 'body'>
        <div className="name">
         
        </div> 
 
         <div className= 'picBox'>
            <img src={image} alt={name}/>    
         </div>
        
        <div className= 'description'>
            <h2>{name}</h2>
    <p>Species: {species}</p>
    <p>Origin: {origin}</p>
    <p>Status: {status}</p>
        </div>
 
        </Everything>
        )
};
const Everything = styled.div`
    display: flex;
    justify-content: space-around;

    
`
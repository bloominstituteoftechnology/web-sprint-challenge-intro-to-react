// Write your Character component here
import React, { useState } from 'react'
import Details from './Details'
import styled from "styled-components";

    const Character = ({characterData}) => {
 const [open, setOpen] = useState(false);

 const onChange = () => {
     if(open === false) {
         setOpen(true);
     }
     else{
         setOpen(false);
     }
 }

// console.log(characterDetails[]);
const Link = styled.a`
    color: orange;
    font-size: 2rem;
    cursor: pointer;
    &:hover{
    text-decoration: none;
    }
`
    return (
        <div className="cardContainer">
            <div>
            {characterData.name}
            <Link onclick={onChange}>Stats</Link>
            </div>
            {open && <Details info={characterData.data}/>}
        </div>

    )
    
}
export default Character


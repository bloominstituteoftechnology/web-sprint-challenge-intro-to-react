import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
border-radius:20px;
border: 2px solid black;
margin:5rem 20rem 10rem 20rem;
padding:30px;
display:flex;
flex-direction:column;
background-color:white;
font-size:calc(9px + 2vmin);

`
export default function Charecter({info}){
    return (
        <StyledDiv>
            <h2>{ info.name}</h2>
            <img src={info.image} alt={info.name} />
            <h3>{info.status}</h3>
            <h3>{info.species}</h3>
            <h3>{info.gender}</h3>
            <h3>{info.location}</h3>
            <p>{info.info}</p>
        </StyledDiv>

    )
}

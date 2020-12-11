import React from "react";
import styled from "styled-components"

const Head = styled.div`
    border: 5px solid gold;
    background-color:  red ;
    padding: 2%2rem;
    font-size: 5rem;
`;

const Title = styled.h1`
    color: gold;
    text-shadow: 10px 10px 40px black;
`;

export default function HeaderComponent (){
 
 return (
     <Head className = "head-container">
        <Title className = 'header'>Christmas React</Title>
        <Title className = 'header'>Aleksandar Jovanovic</Title>
    </Head>
 )
}


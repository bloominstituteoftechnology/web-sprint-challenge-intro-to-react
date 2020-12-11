import React from "react";
import styled from "styled-components"

const Footer = styled.div`
    border: 5px solid gold;
    background-color:  red ;
    padding: 2%2rem;
   
`;

const Signature = styled.h1`
    color: gold;
    text-shadow: 1px 1px 6px #111;
`;



export default function FooterComponent (){
 
 return (
     <Footer className = "foot-container">
        <Signature className = 'footer'>Marry Christmas © 2020 . Sasha </Signature>
    </Footer>
 )
}


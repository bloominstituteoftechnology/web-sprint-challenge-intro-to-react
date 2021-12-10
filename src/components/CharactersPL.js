import React, { useEffect, useState } from "react";
import Character from "./Character";

import styled from "styled-components";

const StyledContainer = styled.div`
    flex-wrap: wrap;
    border: 5px solid black;

`

export default function CharactersPL (props){
    let { birthyr, name } = props;

   // const[ characters, setCharactersPL] = useState(null);

    //we want to use 

    return (
        <StyledContainer className='container'> 
            <Character name={name} birthyr={birthyr}/>
        </StyledContainer>
    );
};
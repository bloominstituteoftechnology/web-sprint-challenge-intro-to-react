// Write your Character component here
import React, {useState, useEffect} from "react";
import styled from "styled-components"


const Char = (props) => {
    const { people } = props;
    return (
            <StyledChar jedi={people.name === "Luke Skywalker" || "Obi-Wan Kenobi"}>
            <div>
                <h2>{people.name}</h2>
            </div>
            </StyledChar>
    )
}


export default Char

const StyledChar = styled.div`
    
`

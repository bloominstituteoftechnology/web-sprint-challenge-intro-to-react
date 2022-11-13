import React, { useState, useEffect} from "react";
import DropdownCreator from "./DropdownCreator";
import Character from "./Character";
import styled from "styled-components";

const StyledButton = styled.button`
    color: rgb(36, 27, 3);
    background-color: rgba(143,67,33,0.5);
    border: double;
    :hover {
        transform: scale(1.1);
    }
    :active {
        transform: scale(1);
    }
`;





const Dropdown = (props) => {

    
    const { characters }= props
    const [currentCharacter, setCurrentCharacter] = useState()
    const [display, setDisplay] = useState(true)

    useEffect(() => {
        console.log(currentCharacter)
    }, [currentCharacter])

    return( 
        <div className="container">
            <StyledButton onClick={() => setDisplay(!display)}>Character List</StyledButton>
            {currentCharacter && <Character currentCharacter={currentCharacter}/>}
            <div className="dropdown-content">
                {display && <DropdownCreator characters={characters} setCurrentCharacter={setCurrentCharacter}/>}
            </div>
        </div>
    )


}

export default Dropdown
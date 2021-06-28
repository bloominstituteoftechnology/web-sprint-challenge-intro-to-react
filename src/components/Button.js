import React, { useState } from 'react' 
import styled from 'styled-components'

// Wanted to get this component to hide & show the characters but was unsuccessful
// But I did make another component with some working styles

const Button = (props) => {
    console.log(props)

//attempting to setState
const [buttonOn, setButtonOn] = useState(true)

const toggleButton = () => {
    setButtonOn(!buttonOn)
    let displayButton = document.querySelector(':.characterList > div')
    {(buttonOn == false ? displayButton.style.display = 'none'
    : displayButton.style.display = 'flex')}

};

    console.log(toggleButton)

//adding style
const StyledButton = styled.div`
margin-top: -1.85%;

button {
    border-radius: 1rem;
    padding: 0.5rem;
    font-size: 1.75rem;
    font-weight: bold;
    width: 12rem;
    transition: 1s;
}

button:hover {
    background-color: black;
    color: hotpink;

}

`;
    return (
        <StyledButton>
            <button id='toggleButton' onclick={toggleButton}>
            {buttonOn === true ? '' : buttonOn === false}
                Characters
            </button>
        </StyledButton>
    )
}

export default Button
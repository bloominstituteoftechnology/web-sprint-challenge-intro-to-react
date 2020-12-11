import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return (
        <StyledHeader>
      <h1><span>Rick and Morty!</span></h1>
       </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.div`
font-size: 1.2rem;
display: flex;
justify-content: center;
align-items: center;
height: 80px;

h1 span {
    background-color: lightgrey;
}
`






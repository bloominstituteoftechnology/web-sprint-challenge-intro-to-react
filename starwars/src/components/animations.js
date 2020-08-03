import styled from 'styled-components'
import React from "react"


const Button2 = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  ${props => props.primary && Button2 === true`
    background: palevioletred;
    color: white;
  `}
`;
const Container = styled.div`
  text-align: center;
`
return(
  <Container>
    <Button2>Normal Button</Button2>
    <Button2 primary>Primary Button</Button2>
  </Container>
);

export default Button2
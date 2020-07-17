// Write your Character component here

import React from "react";
import styled from 'styled-components'

const Container = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between
`
const Cards = styled.div`
border: 2px solid black;
width: 30%;
min-width: 200px;
margin-bottom: 1rem;
background-color: silver;
`

const Characters = (props) => {

  const {characters} = props;
  return (
    <Container className="container">
      {
      characters.map((p) => {
        return (
        <Cards>
            <h2>Name: {p.name}</h2>
            <p>Height: {p.height}</p>
            <p>Mass: {p.mass}</p>
            <p>Hair color: {p.hair_color}</p>
        </Cards> )
      })
      }
    </Container>
  );
};

export default Characters;


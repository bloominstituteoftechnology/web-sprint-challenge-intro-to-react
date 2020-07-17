// Write your Character component here

import React from "react";
import styled from 'styled-components'

const Container = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
div:hover {
    transition: 0.6s ease-in-out;
    transform: scale(1.1) rotate(360deg);
   
}
`

const Cards = styled.div`
border: 2px solid black;
width: 30%;
min-width: 200px;
margin-bottom: 1rem;
background-color: rgba(50, 0, 200, 0.3);
color: white;
`

const Characters = (props) => {

  const {characters} = props;
  return (
    <Container className="container">
      {
      characters.map((p) => {
        return (
        <Cards key={p.name}>
            <h2>{p.name}</h2>
            <p>Height: {p.height}</p>
            <p>Mass: {p.mass}</p>
            <p>Gender: {p.gender}</p>
            <p>Hair color: {p.hair_color}</p>
        </Cards> )
      })
      }
    </Container>
  );
};

export default Characters;


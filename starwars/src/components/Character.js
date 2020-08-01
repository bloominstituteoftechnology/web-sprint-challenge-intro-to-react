// Write your Character component here
import React from "react";
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
 0% {
    transform: scale(0);
  }
  40% {
    transform: scale(0.1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
`

const Container = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
div:hover {
    transition: 1s ease-in-out;
    transform: scale(1.3) rotate(720deg);
    background-color: rgba(50, 0, 150, 0.9);
}
`
const Cards = styled.div`
animation: ${kf} .8s ease-in-out backwards;
border: 2px solid black;
width: 30%;
min-width: 200px;
margin-bottom: 1rem;
background-color: rgba(50, 0, 200, 0.3);
color: white;
text-shadow: 2px 2px 2px black;
h2 {
    font-weight: bold;
}
`

const Characters = (props) => {

  const {characters} = props;
  return (
    <Container className="container">
      {
      characters.map((p) => {
        return (
        <Cards key = {p.name}>
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
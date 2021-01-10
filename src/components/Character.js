import React from 'react';
import '../App.css';
import styled from 'styled-components';
import {
  Card, CardText, 
  CardTitle, 
} from 'reactstrap';



export default function Character({data}) {
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = data;
  const { homeworld, films, species, vehicles, starships } = data;
  console.log("data in Character: ", data); // it works

  const StyledDiv = styled.div`
  color: palevioletred;
  font-weight: bold;
`;


  return (
    <div className="character-container">
      {/* <StyledDiv> */}
        <Card  class='card'>
          <CardTitle>{name}</CardTitle>
          <CardText>
            height: {height} <br/>
            mass: {mass} <br/>
            hair color: {hair_color} <br/>
            skin color: {skin_color} <br/>
            eye color: {skin_color} <br/>
            birth year: {birth_year} <br/>
            gender: {gender} <br/>
          </CardText>
        </Card>
      

      {/* </StyledDiv> */}
   


    </div>

    
  );


 

}

// const StyledDiv = styled.div`
// background: white;
// width: 50%;
// `;

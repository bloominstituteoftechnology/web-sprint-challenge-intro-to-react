import React from "react";
import styled, { css } from "styled-components";


const Data = styled.div`
border: 2px solid black;
margin: 50px;
padding: 150px;
}
`
const Title = styled.h1`
color: tomato;
`

const ListOne = styled.ul`
&:hover{
  color: orange;
}
`
const ListTwo = styled.ul`
&:hover{
  color: orange;
}
`
const ListThree = styled.ul`
&:hover{
  color: orange;
}
`
const ListFour = styled.ul`
&:hover{
  color: orange;
}
`
const ListFive = styled.ul`
&:hover{
  color: orange;
}
`
const ListSix = styled.ul`
&:hover{
  color: orange;
}
`
const ListSeven = styled.ul`
&:hover{
  color: orange;
}
`
const ListEight = styled.ul`
&:hover{
  color: orange;
}
`
const ListNine = styled.ul`
&:hover{
  color: orange;
}
`




const ProjectCard = ({
  name,
  created,
  climate,
  diameter,
  edited,
  gravity,
  population,
  rotation,
  surface,
  terrain,
}) => {


 



  return (
    <Data className = 'wrapper'>
      <Title>{name}</Title>
      <ListOne>Created : {created}</ListOne>
      <ListTwo>Clinate : {climate}</ListTwo>
      <ListThree>Diameter : {diameter}</ListThree>
      <ListFour>Edited : {edited}</ListFour>
      <ListFive>Gravity : {gravity}</ListFive>
      <ListSix>Population : {population}</ListSix>
      <ListSeven>Rotation : {rotation}</ListSeven>
      <ListEight>Surface : {surface}</ListEight>
      <ListNine>Terrain : {terrain}</ListNine>
    </Data>
  );
};
export default ProjectCard;
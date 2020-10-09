// Write your Character component here
import React from 'react'
import styled from 'styled-components'
let Character = function(props){
let {swcharacter} = props;

//styles//
let Div1 = styled.div`
display:flex;
flex-direction:column;
align-items:center;
font-size:2rem;
border: black solid 5px;
width:50%;
background-color:yellow;
margin-left:25%;
`


return(
<Div1>
<h2>{swcharacter.name}</h2>
<ul>
<li>Birth Year : {swcharacter.birth_year}</li>
<li>Gender : {swcharacter.gender}</li>
<li>Height : {swcharacter.height}</li>
<li>Hair Color : {swcharacter.hair_color}</li>
<li>Eye Color : {swcharacter.eye_color}</li>
</ul>
</Div1>
);
}


export default Character